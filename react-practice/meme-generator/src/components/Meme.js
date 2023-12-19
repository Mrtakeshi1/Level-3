import React from "react";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = React.useState([]);
  const [savedMemes, setSavedMemes] = React.useState([]);
  const [selectedMemeIndex, setSelectedMemeIndex] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch memes");
        }
        return res.json();
      })
      .then((data) => {
        setAllMemes(data.data.memes);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  function saveMeme() {
    if (selectedMemeIndex !== null) {
      // Edit existing meme
      setSavedMemes((prevMemes) => {
        const updatedMemes = [...prevMemes];
        updatedMemes[selectedMemeIndex] = meme;
        return updatedMemes;
      });
      setSelectedMemeIndex(null); // Reset selected index after editing
    } else {
      // Save new meme
      const newMeme = {
        ...meme,
        // Preserve topText and bottomText values
        topText: meme.topText || "Default Top Text",
        bottomText: meme.bottomText || "Default Bottom Text",
      };

      if (!savedMemes.some((m) => m.randomImage === meme.randomImage)) {
        setSavedMemes((prevMemes) => [...prevMemes, newMeme]);
      }
    }

    // Clear form fields
    setMeme({
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg",
    });
  }

  function deleteMeme(index) {
    setSavedMemes((prevMemes) => {
      const updatedMemes = [...prevMemes];
      updatedMemes.splice(index, 1);
      return updatedMemes;
    });
  }

  function editMeme(index) {
    const selectedMeme = savedMemes[index];
    setMeme(selectedMeme);
    setSelectedMemeIndex(index);
  }

  return (
    <main>
      {loading && <p>Loading memes...</p>}
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="form--button" onClick={getMemeImage}>
          New Meme
        </button>
        <button className="form--button" onClick={saveMeme}>
          {selectedMemeIndex !== null ? "Edit Meme ✏️" : "Save Memes 📁"}
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" alt="Random Meme" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
      <div className="saved-memes">
        <h2 className="box">Created Memes</h2>
        <div className="saved-memes-list">
          {savedMemes.map((savedMeme, index) => (
            <div key={index} className="saved-meme">
              <div style={{ position: "relative" }}>
                <img src={savedMeme.randomImage} alt="Saved memes" className="meme--image" />
                <h2 className="meme--text top">{savedMeme.topText}</h2>
                <h2 className="meme--text bottom">{savedMeme.bottomText}</h2>
              </div>
              <div className="meme-buttons">
                <button className="edit" onClick={() => editMeme(index)}>Edit</button>
                <button onClick={() => deleteMeme(index)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
