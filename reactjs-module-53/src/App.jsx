import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PriceSec from './components/PriceSec/PriceSec'
import Rechart from './components/Rechart/Rechart'
import PhoneHunter from './components/PhoneHunter/PhoneHunter'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
   <h1 className='text-center text-9xl'>helo there</h1>
   <PriceSec></PriceSec>
   <Rechart></Rechart>
   <PhoneHunter></PhoneHunter>

    </div>
  )
}

export default App
