
import React from 'react'
import './App.css'
import bgVideo from './assets/earth.mp4'
import Navbar from './comp/Navbar'



const App = () => {

  return (
    <div>
      <Navbar/>
      <div className='h-175  relative'>
        <video className='fixed  top-0  object-contain -z-1'  src={bgVideo} autoPlay loop muted ></video>
      </div>
    </div>
  )
}

export default App
