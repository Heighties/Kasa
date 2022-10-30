import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const Wrapper = styled.div`
  color: ${colors.primary};
  height: 570px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Content = styled.div`
    margin: 0 40px;
    text-align: center;
`

const ErrorNumber = styled.p`
    font-size: 96px;
    font-weight: 700;
    margin: 0;
`

const Text = styled.p`
    font: 18px;
    font-weight: 500;
    margin: 0;
    margin-top: 10px;
`

function Error() {
  return (
    <Wrapper>
        <Content>
            <ErrorNumber>404</ErrorNumber>
            <Text>Oups! La page que vous demandez n'existe pas</Text>
        </Content>
        <Link to='/'>Retourner sur la page d'accueil</Link>
    </Wrapper>
  )
}

export default Error