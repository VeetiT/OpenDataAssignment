import React, { useState } from "react"

function Header({image}) {
  return (
    <div>
        <img src={image}/>
      <h1>Pokemon Finder</h1>
      <p>Enter name of a Pokemon. <br></br> Couple different Pokemons could be Pikachu, Turtwig, Kyogre </p>
    </div>
  )
}

export default Header