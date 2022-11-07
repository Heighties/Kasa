import React from 'react'
import LOGO from '../../assets/LOGO2.png'
import styled from 'styled-components'


const Container = styled.div`
  position: relative;
  width: 100%;
  height: 170px;
  background: #000000;
  bottom: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 960px){
        width: 100%;
    }
`

const FooterLogo = styled.img`
  /* margin-top: 66px; */
  height: 39.44px;
  width: 122px;
  /* margin-left: 48%; */
  /* align-items: center; */
  align-self: center;
`

const Text = styled.p`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  /* line-height: 142.6%; */
  text-align: center;
  color: #FFFFFF;
  margin-top: 20px;
`

function Footer() {
  return (
    <Container>
        <FooterLogo src={LOGO} />
        <Text>© 2020 Kasa. All rights reserved</Text>
    </Container>
  )
}

export default Footer