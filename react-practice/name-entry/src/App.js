import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: ''
  });

  const [names, setNames] = useState(["Scott Pilgrim", "Sub-Zero"]);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setNames((prevNames) => [...prevNames, formData.name]);
    setFormData({
      name: ''
    });
  }

  function handleRemove(index) {
    setNames((prevNames) => prevNames.filter((_, i) => i !== index));
  }

  const listItem = names.map((name, index) => (
    <li key={index}>
      {name}
      <button  className="remove-btn" onClick={() => handleRemove(index)}> X </button>
    </li>
  ));

  return (
    <div className="App">
      <h1>Name Fictional Characters!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          onChange={handleChange}
          name="name"
          value={formData.name}
          autoComplete="off"
        />
        <button type="submit">Submit Name</button>
      </form>
      <ul>{listItem}</ul>
      <h2>{formData.name}</h2>
    </div>
  );
}

export default App;