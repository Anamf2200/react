import React, { useCallback, useEffect,useState,useRef } from 'react'

function passwordgenerator() {
const [length,setLenght] = useState(8);
const [number,setNumber]=useState(false);
const [character,setCharacter]=useState(false);
const [password,setPassword]=useState("")
const useref=useRef(null)


const randomPassword= useCallback(()=>{
    let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass=""
    if(number) str+="0123456789"
    if(character) str+="~!@#$%^&*()_+"

    for(let i=1;i<=length;i++){
let char=Math.floor(Math.random() * str.length); 
pass+=str.charAt(char);

    }
    setPassword(pass)
},[length,number,character]
)


useEffect(()=>{
  randomPassword()
},[length,number,character,randomPassword])

const copyPassword= useCallback(()=>{
  useref.current?.select();
  useref.current?.setSelectionRange(0,100);
  window.navigator.clipboard.writeText(password)

},[password])


  return (
   <>
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
    <div className='text-orange text-center my-3'>Password generator
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input type="text"value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={useref} />
            <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPassword}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
                <input 
                  type="range"
                  min={6}
                  max={100}
                  value={length}
                   className='cursor-pointer'
                   onChange={(e)=>{setLenght(e.target.value)}} />
                   <label>Lenght{length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
                <input type="checkbox"
          defaultChecked={number}
          id="numberInput" 
          onChange={()=>{
            setNumber((prev)=>!prev)
          }}/>
          <label>Number</label>
            </div>
            <div className='flex items-center gap-x-1'>
                <input type="checkbox"
              defaultChecked={character}
              id="characterInput"
              onChange={()=>{
                setCharacter((prev)=>!prev)
              }}
               />
              <label>Character </label>
            </div>
        </div>
    </div>
   </div>
   
   
   
   
   </>
  )
}

export default passwordgenerator

