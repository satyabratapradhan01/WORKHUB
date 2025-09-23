import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import NavBar from './component/NavBar'
import Footer from './component/Footer'
import Home from './page/Home'
import About1 from './component/About'
import Pricing from './component/Pricing'
import Service from './component/Service'
import Login from './page/Login'
import Singup from './page/Singup'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About1 />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/service' element={<Service />} />
        <Route path='/login' element={<Login />} />
        <Route path='/singup' element={<Singup />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
