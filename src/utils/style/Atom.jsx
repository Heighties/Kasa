import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import colors from './colors';

export const StyledLink = styled(Link)`
  padding: 10px 15px;
  text-decoration: none;
  font-size: 18px;
  text-align: center;
  color: ${colors.primary};
`