import React from 'react'
import { NavLink } from 'react-router-dom'
import { StyledNavBar } from './styled/NavBar.styled'

function NavBar() {
  return (
    <StyledNavBar>
        <ul>
            <li className="nav-item"><NavLink to="/"><img className='logo' src="/images/pokeLogo.png" alt="pokeball-logo"/></NavLink></li>
            <li className="nav-item"><NavLink to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink to="/pokemons">Pokédex</NavLink></li>
        </ul>
    </StyledNavBar>
  )
}

export default NavBar