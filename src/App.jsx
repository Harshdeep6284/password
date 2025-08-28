import { useState } from 'react'
import './App.css'
import { useCallback } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

function App() {
 
  const [length , setLength] =  useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] =  useState("")

  // useRef Hook
  const passwordRef = useRef(null)

  const passwordGenerator =  useCallback(()=>{
    let pass = ''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*_-=+[]{}~`"

    for(let i = 0; i < length; i++){
     let char = Math.floor(Math.random() * str.length)
     pass += str.charAt(char)
    }
    setPassword(pass)
  },[length, numberAllowed, charAllowed])

  const copyText = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      if (passwordRef.current) {
        passwordRef.current.select();
      }
    }
  };

  // copy functionality define here
  useEffect(()=>{
      passwordGenerator()
  },[length , numberAllowed , charAllowed, passwordGenerator])
  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 bg-gray-800 my-8 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
     <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text" className='outline-none w-full py-1 px-3' readOnly value={password} ref={passwordRef}/>
  <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyText}>copy</button>
     </div>
     <div className='flex items-center gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range" min={6} max={100} value={length} className='cursor-pointer' 
        onChange={(e)=> {setLength(e.target.value)}}
        />
        <label htmlFor="length">Length : {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"   onChange={()=> {setNumberAllowed((prev) => !prev) }}  />
        <label htmlFor="length">Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox" onChange={()=> {setCharAllowed((prev) => !prev) }} />
        <label htmlFor="length">Characters</label>
      </div>
     </div>
    </div>
  )
}

export default App