import React, { useRef, useState } from 'react'

function AddItems() {
    const [inputText,setInputText]=useState('N/A')
    const [skills,SetSkills]=useState([])
    const inputRef=useRef()
    function handleAddEvent(){
        if(inputRef.current.value!=''){
            SetSkills((prev)=>[...prev,inputRef.current.value])
        }
        setInputText('N/A')
    }
    const clear=()=>{
        SetSkills([])
        inputRef.current.value='' 
    }
  return (
    <div className='pb h-[100vh] flex flex-col justify-center items-center gap-[12px]'>
        <h1 className='text-4xl text-gray-600 underline'>Your Skill Stack!</h1>
        <div className='h-[20vh] w-[50vw] flex justify-center items-center'>
            <p className=' w-[40vw] p-[12px]'>{inputText}</p>
        </div>
        <div className='h-[20vh] w-[50vw] flex flex-col justify-center items-center gap-[10px]'>
            <input type="text" placeholder='Enter Your Skills' onChange={(e)=>{setInputText(e.target.value)}} ref={inputRef} className='pb  rounded-2xl w-[40vw] p-[10px]' />
            <div className='flex justify-center gap-4'>
            <button className='w-[8vw] p-[5px] rounded-3xl bg-green-500' onClick={()=>{handleAddEvent()}}>Add</button>
            <button className='w-[8vw] p-[5px] rounded-3xl bg-red-500' onClick={()=>{clear()}}>Clear</button>
            </div>

        </div>
        <div className='overflow-auto border-2 border-amber-200 rounded-3xl   h-[30vh] w-[50vw] flex justify-center items-center'>
            <p className='  w-[40vw] p-[10px]'>Your Skill List:{ skills.map((element,index)=>{
                        return <li key={index}>{element}</li>
                })}</p>
        </div>
    </div>
  )
}

export default AddItems
