import { useState } from 'react'
import Header from './components/Header'
import './style/app.css'
import image from './assets/pokeball.png'

function App() {
  
  return (
    <div>
      <Header image={image}/>
      <h1></h1>
    </div>
  )
}

export default App
