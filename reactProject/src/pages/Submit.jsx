import React from 'react'

function Submit() {
    const userName=localStorage.getItem('userName')
    console.log(userName);
    
    
  return (
    <div className=' h-[100vh] flex flex-col justify-center items-center'>
        <div className='  flex flex-col justify-center items-center gap-5'>
            <p className='text-center text-[18px] sm:underline sm:text-2xl '>Hii {userName} your details submited sucessfully, our team communicate you as soon!</p>
            <p className='text-2xl text-green-500  sm:text-3xl'>Thank You!!</p>      
        </div>
    </div>
  )
}

export default Submit
