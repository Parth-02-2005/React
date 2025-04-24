import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characters, setCharacters] = useState(false)
  const [copied, setCopied] = useState(false);
  const passwordRef = useRef(null);
  const[password, setPassword] = useState('')

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (numberAllowed) {
      str += '0123456789'
    }
    if (characters) {
      str += '!@#$%^&*()_+[]{}|;:,.<>?'
    }
    for (let i = 0; i < length; i++) { 
      pass += str[Math.floor(Math.random() * str.length)]
    }

    setPassword(pass);
    setCopied(false);

  },[length, numberAllowed, characters, setPassword])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    passwordRef.current.select();
    setCopied(true);
  };

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characters, passwordGenerator])
  return (
    <>
     <div className="w-full max-w-md mx-auto shadow-lg rounded-2xl px-6 py-6 my-10 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold text-center mb-6 text-orange-400">Password Generator</h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-6">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-2 px-3 text-black text-white"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyToClipboard}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>

      <div className="flex flex-col gap-4 text-sm text-white">
        <div className="flex items-center justify-between text-white">
          <label htmlFor="length">Length: {length}</label>
          <input
            id="length"
            type="range"
            min={6}
            max={20}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="cursor-pointer"
          />
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="numbers">Include Numbers</label>
          <input
            id="numbers"
            type="checkbox"
            checked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
            className="w-4 h-4 cursor-pointer"
          />
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="symbols">Include Symbols</label>
          <input
            id="symbols"
            type="checkbox"
            checked={characters}
            onChange={() => setCharacters((prev) => !prev)}
            className="w-4 h-4 cursor-pointer"
          />
        </div>

        <button
          onClick={passwordGenerator}
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg mt-4 font-semibold"
        >
          Generate Password
        </button>
      </div>
    </div>
    </>
  )
}

export default App
