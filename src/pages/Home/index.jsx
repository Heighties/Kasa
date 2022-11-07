// import styled from 'styled-components'
import React from 'react'
import { useFetch } from '../../utils/hooks'
import Card from '../../Components/Card'
// import logements from '../../datas/data.json'
import { Link } from "react-router-dom";
import Banner from '../../Components/Banner'
import image from '../../assets/IMG.png'
// import stData from '../../datas/stData'
import Error from '../Error';
import { HomeWrap, Logements, Slogan, CardWrapper, Wrapper } from './style';



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
    <Wrapper>
        <Banner image={image} title={Slogan} className='banner'/>
    <HomeWrap>
        
        {/* <section className='logements'> */}
        <Logements>
            {logementList.map((logement) => {
                console.log(logement._id)
            return (
                <CardWrapper key={logement.id}>
                    <Link to={`/logement/${logement._id}`}>
                        <Card cover={logement.cover} title={logement.title} />
                    </Link>
                </CardWrapper>
            )
            })}
        </Logements>
        {/* </section> */}
    </HomeWrap>
    </Wrapper>
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