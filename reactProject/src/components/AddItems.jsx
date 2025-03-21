import React, { useRef, useState } from 'react'

function AddItems() {
    const [inputText,setInputText]=useState('N/A')
    const [skills,SetSkills]=useState([])
    const inputRef=useRef()
    function handleAddEvent(){
        SetSkills((prev)=>[...prev,inputRef.current.value])
        // inputRef.current.value='' 
         setInputText('N/A')
    }
  return (
    <div className='pb h-[100vh] flex flex-col justify-center items-center gap-[20px]'>
        <div className='pb h-[20vh] w-[50vw] flex justify-center items-center'>
            <p className=' w-[40vw] p-[12px]'>{inputText}</p>
        </div>
        <div className='h-[20vh] w-[50vw] flex flex-col justify-center items-center gap-[10px]'>
            <input type="text" placeholder='Enter Your Skills' onChange={(e)=>{setInputText(e.target.value)}} ref={inputRef} className='pb  rounded-2xl w-[40vw] p-[10px]' />
            <button className='w-[8vw] p-[5px] rounded-3xl bg-green-500' onClick={()=>{handleAddEvent()}}>Add</button>
        </div>
        <div className='pb h-[20vh] w-[50vw] flex justify-center items-center'>
            <p className=' w-[40vw] p-[12px]'>Your Skill List:{skills.map((element,index)=>{
                        return <li key={index}>{element}</li>
                })}</p>
        </div>
    </div>
  )
}

export default AddItems
