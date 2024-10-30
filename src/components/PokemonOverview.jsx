import React, { useState } from "react"
import Search from "./SearchPokemon"

function PokemonOverview() {
  const [pokemonData, setPokemonData] = useState(null)
  const [error, setError] = useState("")

  const fetchPokemon = async () => {
    const pokemonName = document.getElementById("PokemonName").value.toLowerCase()

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      if (!response.ok) {
        throw new Error("Pokemon was not found")
      }
      const data = await response.json()
      setPokemonData(data)
      setError("")
    } catch (err) {
      setError(err.message)
      setPokemonData(null)
    }
  }

  return (
    <div>
      <Search onSearch={fetchPokemon} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {pokemonData ? (
        <div>
          <img src={pokemonData.sprites.front_default} alt={`${pokemonData.name} sprite`} />
          <h2>{pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}</h2>

          <h3>Types:</h3>
          <ul>
            {pokemonData.types.map((type, index) => (
              <li key={index}>{type.type.name}</li>
            ))}
          </ul>

          <h3>Abilities:</h3>
          <ul>
            {pokemonData.abilities.map((ability, index) => (
              <li key={index}>{ability.ability.name}</li>
            ))}
          </ul>

          <h3>Stats:</h3>
          <ul>
            {pokemonData.stats.map((stat) => (
              <li key={stat.stat.name}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  )
}

export default PokemonOverview