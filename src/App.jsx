import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
 const [length, setLength] = useState(8)
 const [number, setNumber] = useState(false)
 const [character, setCharacter] = useState(false)
 const [password, setPassword] = useState("")
 const passwordRef= useRef(null)
  const passwordGenerator =  useCallback(() =>{
    let pass=" "
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
     

    if(number) str +="0123456789"
    if(character) str +="!@#$%^&*()><?/_-+={}[]" 

    for (let i = 0; i<=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char) 
    }

    setPassword(pass)


  }, [length, number, character, setPassword])

  useEffect(()=>{
  passwordGenerator() }, [length, number, character, passwordGenerator])
  // console.log(password)

  const copyPasswordToClipboard = useCallback(()=>{
   passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)},[password])
   
  return (
    <>
   <div className='w-full max-w-lg min-w-sm py-1 mx-auto my-2 text-center rounded-lg text-white bg-gray-700'><h1 className='my-2 py2'>Password Generator</h1>
   <div className='w-full max-w-lg min-w-sm py-1 mx-0 my-2 text-center rounded-lg text-white bg-gray-700 overflow-hidden inline-flex'>
    <input className=' w-full outline-none px-2 py-1 mx-2 text-gray-700'
    type='text' value={password} placeholder='Password Generator'/>
    
    <button className=' w-20 outline-none bg-blue-700 text-white shrink-0' onClick={copyPasswordToClipboard}>Copy</button>
   </div>
   <div className='inline-flex w-full max-w-lg min-w-sm py-1 mx-auto my-2 text-center rounded-lg text-white bg-gray-700 '>
            <div className='flex items-center mr-4'>
              <input 
              type='range'
              min={6}
              max={100} 
              value={length} 
              className='cursor-poninter text-orange-800'
              onChange={(e) =>{setLength(e.target.value)}}
              />
              <label>Length:{length}</label>
              </div>
              <div className='flex items-center mr-4'>
              <input
              className='mx-3'
               type='checkbox'
              defaultChecked={number}
              id="numberInput"
              onChange={() =>{
              setNumber((prev) => !prev);}}
              />
               <label htmlFor='numberInput'>Number</label>
               </div>
               <div className='flex items-center mr-4'>
              <input
              className='mx-3'
               type='checkbox'
              defaultChecked={character}
              id="characterInput"
              onChange={() =>{
              setCharacter((prev) =>!prev)}}
              />
              <label htmlFor='characterInput'>Character</label>
              </div>
          

   </div>
   </div>
   </>
  )
}

export default App
