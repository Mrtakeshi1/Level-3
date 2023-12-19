import './App.css';
import { useState } from 'react'
import Square from './Square';
import Gundam from './Music/Gundam.mp3';

function App() {

  const [colors, setColors] = useState(() => ["white", "white", "white", "white"])


  function smallEventHandler(){
    setColors(prevState => prevState[0] === "white" ? ["black", "black", "black", "black"] : ["white", "white", "white", "white"])
  }

  function partyEventHandler(){
    setColors(prevState => ["purple", "purple", prevState[2], prevState[3]])
  
  }

  function leftEventHandler(){
    setColors(prevState => [prevState[0], prevState[1], "blue", prevState[3]])
    console.log(colors)
  }

  function rightEventHandler(){
    setColors(prevState => [prevState[0], prevState[1], prevState[2], "blue"])
  }

  function box1EventHandler(){
    setColors(prevState =>["lightcoral", prevState[1], prevState[2], prevState[3]])
  }

  function box2EventHandler(){
    setColors(prevState =>[prevState[0], "lightblue", prevState[2], prevState[3]])
  }

  function box3EventHandler(){
    setColors(prevState =>[prevState[0], prevState[1], "lightgreen", prevState[3]])
  }

  function box4EventHandler(){
    setColors(prevState =>[prevState[0], prevState[1], prevState[2], "lightslategrey"])
  }

  function railynnEventHandler(){
    setColors(prevState =>["#fff867", "#fb2f38", "#2c52b3", "#5a5b6d"])
  }


  function play() {
    const colorSequence = [
      "#fff867", // Define your color values here
      "#fb2f38",
      "#2c52b3",
      "#5a5b6d",
    ];
  
    let currentIndex = 0;
  
    const intervalId = setInterval(() => {
      setColors((prevState) => {
        const newColors = [...prevState];
        newColors[currentIndex] = colorSequence[currentIndex];
        currentIndex = (currentIndex + 1) % colorSequence.length;
        return newColors;
      });
    }, 55);
  
    // Play the sound
    new Audio(Gundam).play();
  
    // Stop the interval after a specific duration
    setTimeout(() => {
      clearInterval(intervalId);
      // sets the colors to a final state
      setColors(["white", "red", "black", "green"]);
    }, 800); // Change the duration as needed
  }
  
  return (
    <div className="App">
        <div className='square-1'>
        <Square color={colors[0]}/>
        </div>

        <div className='square-2'>
        <Square color={colors[1]}/>
        </div>

        <div className='square-3'>
        <Square color={colors[2]}/>
        </div>

        <div className='square-4'>
        <Square color={colors[3]}/>
        </div>

        <button onClick={smallEventHandler} className='button1'>DJ Small</button>
        <button onClick={partyEventHandler} className='button1'>Party DJ</button>
        <button onClick={leftEventHandler}>Left Blue</button>
        <button onClick={rightEventHandler}>RIght BLue</button>
        <button onClick={box1EventHandler}>Light Coral</button>
        <button onClick={box2EventHandler}>Light Blue</button>
        <button onClick={box3EventHandler}>Light Green</button>
        <button onClick={box4EventHandler}>Light Slate Grey</button>
        <button onClick={railynnEventHandler}>RX-78-2</button>
        <button onClick={play}>Special</button>
    </div>
  );
}

export default App;