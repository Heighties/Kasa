import styled from 'styled-components'
import React from 'react'
import { useFetch } from '../../utils/hooks'
import Card from '../../Components/Card'
import './home.css'
import logements from '../../datas/data.json'
import { Link } from "react-router-dom";
import Banner from '../../Components/Banner'
import image from '../../assets/IMG.png'
import stData from '../../datas/stData'

const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
`

const slogan = stData.slogan



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
            <div className='banner__wrapper'>
            <Banner image={image} title={slogan} className='banner'/>
            </div>{" "}
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