import React from "react";
import SingleMeme from "./SingleMeme";
import {v4 as uuidv4} from 'uuid'

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
    _id: ''
  });

  
  const [allMemes, setAllMemes] = React.useState([]);
  const [savedMemes, setSavedMemes] = React.useState([]);
  const [selectedMemeIndex, setSelectedMemeIndex] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  
  console.log(savedMemes)
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
        _id: uuidv4(),
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

  function deleteMeme(memeId) {
    setSavedMemes((prevMemes) => prevMemes.filter((meme) => meme._id !== memeId));
  }

  function editMeme(memeId, update) {
    setSavedMemes(prevMemes => prevMemes.map((meme) => meme._id !== memeId ? meme : update))
  }

  const [isEdit, setIsEdit] = React.useState(false)

  function toggleEdit(){
      setIsEdit(prev => !prev)
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
            <SingleMeme 
              savedMeme = {savedMeme}
              key = {index}
              deleteMeme= {deleteMeme}
              editMeme= {editMeme}
              isEdit ={isEdit}
              toggleEdit = {toggleEdit}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
