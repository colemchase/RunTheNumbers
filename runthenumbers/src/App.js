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
    <div className="App bg-gray-400 h-screen space-y-4">
      <h1 className="text-3xl font-bold underline">
        RunTheNumbers
      </h1> 

      <div className="flex space-x-2 jusitfy-center m 2 ">
        <input type="text" id="user-input" name="user-input" placeholder="Price" class="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></input>
        <input type="text" id="user-input" name="user-input" placeholder="Zipcode" class="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></input>
      </div>
      <div className="flex space-x-6 justify-center m-3">
        <div>Bedrooms: </div>
        <button className={`btn btn-info ${selectedButton === 0 ? 'bg-gray-800' : ''}`}onClick={() => handleButtonClick(1)}>0</button>
        <button className={`btn btn-info ${selectedButton === 1 ? 'bg-gray-800' : ''}`}onClick={() => handleButtonClick(1)}>1</button>
        <button className={`btn btn-info ${selectedButton === 2 ? 'bg-gray-800' : ''}`}onClick={() => handleButtonClick(2)}>2</button>
        <button className={`btn btn-info ${selectedButton === 3 ? 'bg-gray-800' : ''}`}onClick={() => handleButtonClick(3)}>3</button>
        <button className={`btn btn-info ${selectedButton === 4 ? 'bg-gray-800' : ''}`}onClick={() => handleButtonClick(4)}>4</button>
      </div>
    </div> 
  );
}

export default App;
