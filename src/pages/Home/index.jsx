import styled from 'styled-components'
import React from 'react'
import { useFetch } from '../../utils/hooks'
import Card from '../../Components/Card'
import './home.css'
import logements from '../../datas/data.json'
import { Link } from "react-router-dom";

const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
`

function Home() {
    // const { data, isLoading, error } = useFetch(
    //     `https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json`
    //   )

    //   const logementList = data?.logementsList
    //   console.log(logementList)
      
    //   if (error) {
    //     return <span>Oups il y a eu un problème</span>
    //   }

//   return (
//     <div className='home'>
//         <h1>Home</h1>
//         {isLoading ? (
//             <h1>Chargement</h1>
//             ) : (
//         <CardsContainer>
//             {logementList.map((logements) =>(
//                 <Card
//                 picture={logements.cover} 
//                 />
//             ))}
//             {/* {data?.cover} */}
//         </CardsContainer>
        // )}
    // </div>
//   )

    return(
        <div className='home'>
            <section className='logements'>
                {logements.map((logement) => {
                return (
                    <article key={logement.id}>
                        <Link to={`/logement/${logement.id}`}>
                            <Card cover={logement.cover} title={logement.title} />
                        </Link>
                    </article>
                )
                })}
            </section>
        </div>
    )


}

export default Home