import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LOGO from '../../assets/LOGO.png'
import { StyledLink } from '../../utils/style/Atom'

const HomeLogo = styled.img`
  height: 70px;
`

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

function Header() {
  return (
    <NavContainer>
    <Link to="/"><HomeLogo src={LOGO} /></Link>
    <div>
    <StyledLink to="/">Acceuil</StyledLink>
    <StyledLink to="/about">A propos</StyledLink>
    </div>
    </NavContainer>
  )
}

export default Header