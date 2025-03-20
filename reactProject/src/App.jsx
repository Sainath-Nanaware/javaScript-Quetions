import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserDetails from './pages/UserDetails'
import Submit from './pages/Submit'
import AddItems from './components/AddItems'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>Hii sainath</h1> */}
      {/* <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/userDetails' element={<UserDetails/>}/>
        <Route path='/submit' element={<Submit/>}/>
      </Routes> */}
      {/* for practice purpose */}
      <AddItems/>
    </>
  )
}

export default App
