import React from 'react'
import './footer.css'
import LOGO from '../../assets/LOGO2.png'
import styled from 'styled-components'


const FooterLogo = styled.img`
  height: 70px;
`

function Footer() {
  return (
    <div className='footer'>
        <FooterLogo src={LOGO} />
        <p>© 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer