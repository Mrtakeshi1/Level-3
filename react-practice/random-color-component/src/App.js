import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [colors, setColors] = useState('');
  const [colorChange, setColorChange] = useState(true);

  useEffect(() => {
    axios
      .get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
      .then(response => setColors(response.data.colors[0].hex))
      .catch(error => console.error('Error fetching color:', error));
  }, [colorChange]);

  console.log(colors);

  const background = {
    backgroundColor: `#${colors}`,
  };

  function colorHandler() {
    setColorChange(prevState => !prevState);
  }

  return (
    <div className="App">
      <div className="box" 
      onClick={colorHandler} style={background}>
      </div>
    </div>
  );
}

export default App;