import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import LOGO from '../../assets/LOGO.png'
// import { StyledLink } from '../../utils/style/Atom'
import colors from '../../utils/style/colors'
import './style.css'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const HomeLogo = styled.img`
  height: 70px;
`

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;  
  padding-bottom: 40px;
  width: 1240px;
  @media screen and (max-width: 960px){
        width: 100%;
    }
`

const StyledLink = styled(Link)`
  cursor: pointer;
  padding: 10px 15px;
  text-decoration: none;
  font-size: 18px;
  text-align: center;
  color: ${colors.primary};
  /* &:focus{
    text-decoration: underline;
  } */
`

const Navbar = () =>{
  const NavLinkStyle = ({isActive})=>{
      return {
        fontWeight: isActive ? 'bold' : 'normal',
        textDecoration: isActive ? 'underline' : 'none',
      }
  }

  return(
      <nav>
          <NavLink style={NavLinkStyle} to="/">Acceuil</NavLink>
          <NavLink style={NavLinkStyle} to="/about">A Propos</NavLink>
      </nav>
  )
}

function Header() {
  return (
    <Wrapper>
    <NavContainer>
    <HomeLogo src={LOGO} />
    <div>
    {/* <NavLink style={NavLinkStyle} to="/">Acceuil</NavLink>
    <NavLink style={NavLinkStyle} to="/about">A Propos</NavLink> */}
    <Navbar/>
    </div>
    </NavContainer>
    </Wrapper>
  )
}

export default Header