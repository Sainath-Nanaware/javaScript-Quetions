import React from 'react'

function UserDetails() {
  return (
    <div className='pb h-[100vh] flex flex-col justify-center items-center gap-[10px]'>
        <h1 className='font-semibold text-3xl'>User Registration</h1>
      <div className=' flex flex-col justify-center items-center gap-[10px] p-[20px]'>
        <input type="text" name='FullName' placeholder='Enter Full Name:' className='border-green-400 border-2  rounded-[5px] p-[6px] w-[68vw] sm:w-[35vw]' />
        <input type="email" name='Email' placeholder='Enter email:' className='border-green-400 border-2  rounded-[5px] p-[6px] w-[68vw] sm:w-[35vw]' />
        <input type="text" name='Address' placeholder='Enter address:' className='border-green-400 border-2  rounded-[5px] p-[6px] w-[68vw] sm:w-[35vw]' />
        <input type="text" name='Phone no' placeholder='Enter phone number:' className='border-green-400 border-2  rounded-[5px] p-[6px] w-[68vw] sm:w-[35vw]' />
        <input type="password" name='Password' placeholder='Create password:' className='border-green-400 border-2  rounded-[5px] p-[6px] w-[68vw] sm:w-[35vw]' />
        <button className='p-[5px]  text-green-600 font-semibold rounded-xl border-2 border-green-500 hover:bg-green-500 hover:text-white w-[28vw] sm:w-[10vw]' onClick={()=>{navigate('/userDetails')}}>Submit </button>
      </div>
    </div>
  )
}

export default UserDetails
