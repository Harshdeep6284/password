import { useState } from 'react'

import './App.css'

function App() {
   const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) chars += "0123456789";
    if (includeSymbols) chars += "!@#$%^&*()_+[]{}|;:,.<>?";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(result);
  };
  

  
  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied!");
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-[400px]">
        <h2 className="text-white text-xl font-bold text-center mb-4">Password Generator</h2>

        
        <div className="flex items-center gap-1 mb-4">
          <input
            type="text"
            
           
            placeholder="Your password"
            className="w--full p-2 rounded text-black"
            read only
          />
          <button
            onClick={copyPassword}
            className="bg-blue-500 hover:bg-blue-600 px-6  py-2 rounded-md text-white font-medium"
            
          >
            Copy
          </button>
        </div>

        
        <div className="mt-4 flex items-center gap-4">

          <input
            type="range"
            min="4"
            max="20"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="accent-blue-600 w-[250px]"
          />
          <span className="text-gray-300">Length:{length}</span>
        </div>

        
        <div className="flex flex-col gap-2 mb-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
            />
            Numbers
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)}
            />
            Characters
          </label>
        </div>

        
        <button
          onClick={generatePassword}
          className="w-full bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md font-semibold"
        >
          Generate
        </button>
      </div>
    </div>
  );
}
       
          
  


export default App
