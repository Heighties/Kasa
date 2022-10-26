import React from 'react'
import './card.css'
// import styled from 'styled-components'
// import colors from '../../utils/style/colors'
// import DefaultPicture from '../../assets/profile.png'
// import PropTypes from 'prop-types'

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

// const CardImage = styled.img`
//   height: 150px;
//   width: 150px;
//   align-self: center;
// `

// const CardTitle = styled.h2`
//   font-size: 8px;
// `

const Card= ({cover, title}) => {
  return (
      // <CardImage src={cover} alt="logement" />,
      // <CardTitle src={title} />
      <div className='card'>
        <img src={cover} alt='logement' className='card__img'/>
        <h2 className='card__title'>{title}</h2>
      </div>
  )
}

// Card.propTypes = {
//     picture: PropTypes.string.isRequired,
// }

// Card.defaultProps = {
//     title: '',
//     picture: DefaultPicture,
// }

export default Card