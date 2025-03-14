
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate=useNavigate()

    return (
    <div className=' h-[100vh]  flex flex-col justify-center items-center gap-[20px] bg-gray-200 '>
        <h1 className='text-5xl font-medium underline'>Welcome Home page</h1>
        <button className='p-[10px]  text-green-600 font-semibold rounded-xl border-2 border-green-500 hover:bg-green-500 hover:text-white' onClick={()=>{navigate('/userDetails')}}>Let's fill your information! </button>
    </div>
  )
}

export default Home
