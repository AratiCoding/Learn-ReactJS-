import { useState,useCallback,useEffect,useRef } from 'react'


function App() {
const [length, setLength]=useState(8)
const [numAllowed, setNumAllowed]=useState(false);
const [charAllowed, setCharAllowed]=useState(false);
const [password, setPassword]=useState("");
const passwordRef=useRef(null);
const passwordGenerator=useCallback((fn=>{
  let pass=""
  let str="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopsdfghjklxcvbnmz"
  if(numAllowed){
    str +="0123456789"
  }
  if(charAllowed){
    str +="!@#$%^&*(){}[]~+="
  }
  for (let i = 1; i <length; i++) {
    let char=Math.floor(Math.random()*str.length +1)
    pass+=str.charAt(char)
    
  }

  setPassword(pass)
}), [length,numAllowed,charAllowed,setPassword])

const copyPasswordToClipBoard = useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,20);
  window.navigator.clipboard.writeText(password)

},[password])

useEffect(()=>{
  passwordGenerator()
},[length,numAllowed,charAllowed,passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto rounded-lg px-4 py-3 bg-gray-800 my-8'>
          <h2 className='text-white text-center'>Password Generator</h2>
        <div className='flex overflow-hidden mb-4'>
          <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3 rounded-l-2xl mt-3 font-bold text-orange-600'
          placeholder='enter password'
          readOnly
          ref={passwordRef} />
          <button onClick={copyPasswordToClipBoard} className='outline-none text-black bg-blue-400 py-0.5 px-3 shrink-0 mt-3 rounded-r-2xl'>copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" 
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label className='text-orange-400'>Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
             defaultChecked={numAllowed}
           id='numberInput'
            onChange={(e)=>{
              setNumAllowed((prev)=>!prev)
            }} />
            <label className='text-orange-400'>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
             defaultChecked={charAllowed}
           id='numberInput'
            onChange={(e)=>{
              setCharAllowed((prev)=>!prev)
            }} />
            <label className='text-orange-400'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
