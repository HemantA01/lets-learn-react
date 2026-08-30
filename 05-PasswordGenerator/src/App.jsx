import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [specialCharAllowed,setspecialCharAllowed] = useState(false)
  const [password,setPassword] = useState('')

  //useRef Hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = ''
    str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(numberAllowed){
      str += '0123456789'
    }
    if(specialCharAllowed){
      str += '()!@#$%^&*[]{}<>./?~'
    }
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char) 
    }
    setPassword(pass)
  }, [length, numberAllowed, specialCharAllowed, setPassword])

  //Copy Password to Clipboard using "useRef" & "useCallback" hook
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()   //To select the full text
    passwordRef.current?.setSelectionRange(0, 10)    //To select the text within range
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, specialCharAllowed, passwordGenerator])   //includes "callBack" and "dependency array"
  return (
    <>
      <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordToClipboard}
        >Copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={8}
        max={30}
        value={length}
         className='cursor-pointer'
         onChange={(e) => setLength(e.target.value)}
        />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          id="numberInput"
          defaultChecked={numberAllowed}
          onChange={(e) => {
             setNumberAllowed((prev) => !prev)
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              id="characterInput"
              defaultChecked={specialCharAllowed}
              onChange={(e) => {
                setspecialCharAllowed((prev) => !prev)
              }}
          />
          <label htmlFor="characterInput">Special Characters</label>
      </div>
    </div>
</div>
    </>
  )
}

export default App
