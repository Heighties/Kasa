import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 150px;
  position: relative;
  margin-bottom: 20px;
  border-radius: 10px;
  overflow: hidden;
`

const Image = styled.img`
  width: inherit;
  height: inherit;
  object-fit: cover;
  border-radius: inherit;
  transform: scale(1);
  transition: transform 300ms; 
`

const Title = styled.h1`
  position: absolute;
  display: flex;
  justify-content: center;
  bottom: 0;
  font-size: 25px;
  font-weight: 500;
  /* margin: 15px 20px; */
  color: white;
  box-sizing: inherit;  
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`

const Overlay = styled.div`
  background-color: black;
  position: absolute;
  top: 0;
  border-radius: 10px;
  height: 100%;
  width: 100%;
  opacity: 0.3;
`

function Banner({image, title}) {
  return (
    <Container>
        <Image src={image} alt='Container' />
        <Overlay/>
        <Title>{title}</Title>
    </Container>)
}

export default Banner