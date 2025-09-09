import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './component/NavBar'
import Hero from './component/Hero'
import Footer from './component/Footer'
import Home from './page/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <Home/>
    <Footer/>
    </>
  )
}

export default App
