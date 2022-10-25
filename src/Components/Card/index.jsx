import React from 'react'
import styled from 'styled-components'
// import colors from '../../utils/style/colors'
import DefaultPicture from '../../assets/profile.png'
import PropTypes from 'prop-types'

// const CardWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   padding: 15px;
//   background-color: ${colors.backgroundLight};
//   border-radius: 30px;
//   width: 300px;
//   height: 300px;
//   transition: 200ms;
//   &:hover {
//     cursor: pointer;
//     box-shadow: 2px 2px 10px #e2e3e9;
//   }
// `

const CardImage = styled.img`
  height: 150px;
  width: 150px;
  align-self: center;
`

function Card(cover) {
  return (
      <CardImage src={cover} alt="logement" />
  )
}

Card.propTypes = {
    picture: PropTypes.string.isRequired,
}

Card.defaultProps = {
    title: '',
    label: '',
    picture: DefaultPicture,
}

export default Card