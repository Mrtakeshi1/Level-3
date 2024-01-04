import { useState } from "react"

export default function SingleMeme(props){
    console.log(props)

    const {savedMeme, deleteMeme, editMeme, isEdit, toggleEdit} = props

    // const [isEdit, setIsEdit] = useState(false)

    // function toggleEdit(){
    //     setIsEdit(prev => !prev)
    // }

    const [edit, setEdit] = useState({
        topText: savedMeme.topText,
        bottomText: savedMeme.bottomText,
        randomImage: savedMeme.randomImage,
        _id: savedMeme._id,
    })

    function handleChange(e){
        const {name, value} = e.target
        setEdit(prevEdit => {
            return {
                ...prevEdit,
                [name]: value
            }
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        editMeme(edit._id, edit)
        toggleEdit()
    }


    return(
        <>
            <div className="saved-meme">
                <div style={{ position: "relative" }}>
                    <img src={savedMeme.randomImage} alt="Saved memes" className="meme--image" />
                    <h2 className="meme--text top">{savedMeme.topText}</h2>
                    <h2 className="meme--text bottom">{savedMeme.bottomText}</h2>
                </div>
                <div className="meme-buttons">
                    <button className="edit" onClick={toggleEdit}>Edit</button>
                    <button onClick={() => deleteMeme(savedMeme._id)}>Delete</button>
                </div>
            </div>
            {isEdit && 
            <form onSubmit={handleSubmit}>
                <input 
                    name="topText"
                    value={edit.topText}
                    onChange={handleChange}
                />
                <input 
                    name="bottomText"
                    value={edit.bottomText}
                    onChange={handleChange}
                />
                <button>Save</button>
                <button onClick={toggleEdit}>Cancel</button>
            </form>}
        </>
    )
}