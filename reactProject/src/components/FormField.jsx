import React from 'react'

function FormField() {
  return (
    <div className='h-[100vh] flex justify-center items-center'>
      <form  className=' flex flex-col justify-center items-center gap-8'>
        <input type="text" placeholder='Enter full name' className=' border border-black focus:outline-amber-600 p-[10px] rounded-xl ' />
        <input type="text" placeholder='Password'className=' border border-black focus:outline-amber-600 p-[10px] rounded-xl' />
      </form>
    </div>
  )
}

export default FormField
