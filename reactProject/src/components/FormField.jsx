import React, { useState } from 'react'
import { IoEyeSharp } from "react-icons/io5";
import { BsEyeSlashFill } from "react-icons/bs";

function FormField() {
    const [passwordIcon,setPasswordIcon]=useState(<BsEyeSlashFill />)
    const [type,setType]=useState("password")
    function handleOnclick(){
        if(type=="password"){
            setPasswordIcon(<IoEyeSharp />)
            setType("text")
        }else{
            setPasswordIcon(<BsEyeSlashFill />)
            setType("password")
        }
    }
    return (
    <div className='h-[100vh] flex justify-center items-center'>
      <form  className=' flex flex-col justify-center items-center gap-8'>
        <input type="text" placeholder='Enter full name' className=' border border-black focus:outline-amber-600 p-[10px] rounded-xl ' />
        <div className='relative'>
        <input type={type} placeholder='Password'className=' border border-black focus:outline-amber-600 p-[10px] rounded-xl'/>
        <p className='absolute top-3 left-44' onClick={()=>{handleOnclick()}}>{passwordIcon}</p>
        </div>
      </form>
    </div>
  )
}

export default FormField
