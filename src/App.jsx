import React, { useState } from "react";
import Header from "./components/Header"
import PokemonOverview from "./components/PokemonOverview"
import './style/app.css'
import image from './assets/pokeball.png'

function App() {
  return (
    <div>
      <Header image={image}/>
    </div>
  )
}

export default App