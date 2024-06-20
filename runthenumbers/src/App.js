import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [selectedButton, setSelectedButton] = useState(null);

  useEffect(() => {
    console.log(selectedButton);
  }, [selectedButton]);

  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
  };

  return (
    <div className="App bg-gray-400">
      <h1 className="text-3xl font-bold underline">
        RunTheNumbers
      </h1> 
      <div className="flex space-x-4 justify-center">
        <button className={`btn btn-info ${selectedButton === 1 ? 'bg-gray-800' : ''}`}onClick={() => handleButtonClick(1)}>1</button>
        <button className={`btn btn-info ${selectedButton === 2 ? 'bg-gray-800' : ''}`}onClick={() => handleButtonClick(2)}>2</button>
        <button className={`btn btn-info ${selectedButton === 3 ? 'bg-gray-800' : ''}`}onClick={() => handleButtonClick(3)}>3</button>
        <button className={`btn btn-info ${selectedButton === 4 ? 'bg-gray-800' : ''}`}onClick={() => handleButtonClick(4)}>4</button>
      </div>
    </div> 
  );
}

export default App;
