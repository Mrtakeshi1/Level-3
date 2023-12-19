import './App.css';
import { useState } from 'react';
import Die from "./Die"

function App() {

  const [numbers, setNumbers] = useState(() => [1, 2, 3, 4, 5]);

  function diceRoll() {
    const randomNumbers = [];

    for (let i = 0; i < 5; i++) {
      randomNumbers.push(Math.floor(Math.random() * 6) + 1);
    }

    setNumbers(randomNumbers);
  }

  return (
    <div className="App">
      <div className="App">
        <Die number={numbers[0]} />
        <Die number={numbers[1]} />
        <Die number={numbers[2]} />
        <Die number={numbers[3]} />
        <Die number={numbers[4]} />
      </div>
      <div>
        <button className="die-button" onClick={diceRoll}>Dice Roll</button>
      </div>
    </div>
  );
}

export default App;
