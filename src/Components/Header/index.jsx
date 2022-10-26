import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LOGO from '../../assets/LOGO.png'
import { StyledLink } from '../../utils/style/Atom'


const HomeLogo = styled.img`
  height: 70px;
`

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20%;
  margin-right: 20%;
  padding-top: 20px;  
  padding-bottom: 40px;
`

function Header() {
  return (
    <NavContainer >
    <Link to="/"><HomeLogo src={LOGO} /></Link>
    <div>
    <StyledLink to="/">Acceuil</StyledLink>
    <StyledLink to="/about">A propos</StyledLink>
    </div>
    </NavContainer>
  )
}

export default Header