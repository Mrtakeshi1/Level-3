import './App.css'
import React, {useState} from 'react'

function App() {

const [color, setColor] = useState("pink")
setColor("green")
  
return (
    <div className="App">
      <h1>{color}</h1>
    </div>
  );
}

export default App;




    // const [color, setColor] = useState("pink")
    // setColor2(prevColor => prevColor === "pink" ? "blue" : "pink")

    // const [people, setPeople] = useState([
    //     {
    //         firstName: "John",
    //         lastName: "Smith"
    //     }
    // ])
    
    // setPeople(prevPeople => {
    //     return [
    //         ...prevPeople,
    //         {
    //             firstName: "Takeshi",
    //             lastName: "Garcia"
    //         }
    //     ]
    // })