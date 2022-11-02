import styled from 'styled-components'
import React from 'react'
import { useFetch } from '../../utils/hooks'
import Card from '../../Components/Card'
// import logements from '../../datas/data.json'
import { Link } from "react-router-dom";
import Banner from '../../Components/Banner'
import image from '../../assets/IMG.png'
import stData from '../../datas/stData'
import Error from '../Error';

// const CardsContainer = styled.div`
//     display: grid;
//     gap: 24px;
//     grid-template-rows: 350px 350px;
//     grid-template-columns: repeat(2, 1fr);
//     align-items: center;
//     justify-items: center;
// `

const slogan = stData.slogan

const HomeWrap = styled.div`
    margin: 0 20%;
`

const Logements = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 50px;
    row-gap: 30px;
    background: lightgray;
    padding: 50px;
    border-radius: 20px;
    margin-bottom: 40px;
`


function Home() {
    const { data: logementList, isLoading, error } = useFetch(
        `http://localhost:8000/api/logements`
      )
      
    if (isLoading) return <h1>LOADING...</h1>

    if (error) {
        return(
            <Error />
          )
      }

console.log(logementList)

return(
    <HomeWrap>
        <div className='banner__wrapper'>
        <Banner image={image} title={slogan} className='banner'/>
        </div>
        {/* <section className='logements'> */}
        <Logements>
            {logementList.map((logement) => {
                console.log(logement._id)
            return (
                <article key={logement.id}>
                    <Link to={`/logement/${logement.id}`}>
                        <Card cover={logement.cover} title={logement.title} />
                    </Link>
                </article>
            )
            })}
        </Logements>
        {/* </section> */}
    </HomeWrap>
)

    // return(
    //     <HomeWrap>
    //         <div className='banner__wrapper'>
    //         <Banner image={image} title={slogan} className='banner'/>
    //         </div>
    //         {/* <section className='logements'> */}
    //         <Logements>
    //             {logements.map((logement) => {
    //             return (
    //                 <article key={logement.id}>
    //                     <Link to={`/logement/${logement.id}`}>
    //                         <Card cover={logement.cover} title={logement.title} />
    //                     </Link>
    //                 </article>
    //             )
    //             })}
    //         </Logements>
    //         {/* </section> */}
    //     </HomeWrap>
    // )


}

export default Home