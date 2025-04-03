import React, { useState } from 'react'

function InterViewQuation() {
    const [count,setCount]=useState(0)

    function handleClick(){
        // setTimeout(()=>{
        //     setCount(count+1)
        // },100)
            setCount(count+1)
            setCount(count+1)
            setCount(count+1)

    }
    console.log("Console count:"+count)
  return (
    <div>
        <p>{count}</p>
        <button onClick={handleClick}>Click</button>    
    </div>
  )
}

export default InterViewQuation
