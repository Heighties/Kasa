import styled from 'styled-components'
import React from 'react'
import Card from '../../Components/Card'
import { useFetch } from '../../utils/hooks'

const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
`

function Home() {
    const { data, error } = useFetch(
        `https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json`
      )

      const logementList = data?.logementsList

      if (error) {
        return <span>Oups il y a eu un problème</span>
      }

  return (
    <div>
        <h1>Home</h1>
        <CardsContainer>
            {logementList.map((logement) =>(
                <Card
                picture={logement.cover} 
                />
            ))}
        </CardsContainer>
    </div>
  )
}

export default Home