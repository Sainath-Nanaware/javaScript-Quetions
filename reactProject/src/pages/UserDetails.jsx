import React from 'react'

function UserDetails() {
  return (
    <div className='pb h-[100vh] flex flex-col justify-center items-center gap-[20px]'>
        <h1 className='font-semibold text-3xl'>User Registration</h1>
      <div className='pb flex flex-col justify-center items-start gap-[10px] p-[20px]'>
        <input type="text" name='FullName' placeholder='Enter Full Name:' className='border-b-orange-50 p-[6px] w-[30vw]' />
        <input type="email" name='Email' placeholder='Enter email:' className='pb p-[6px] w-[30vw]' />
        <input type="text" name='Address' placeholder='Enter address:' className='pb p-[6px] w-[30vw]' />
        <input type="text" name='Phone no' placeholder='Enter phone number:' className='pb p-[6px] w-[30vw]' />

      </div>
    </div>
  )
}

export default UserDetails
