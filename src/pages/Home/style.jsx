// const CardsContainer = styled.div`
//     display: grid;
//     gap: 24px;
//     grid-template-rows: 350px 350px;
//     grid-template-columns: repeat(2, 1fr);
//     align-items: center;
//     justify-items: center;
// `
import styled from "styled-components";
import stData from "../../datas/stData";

export const Slogan = stData.slogan;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10rem;
`;

export const HomeWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const Logements = styled.section`
  /* display: grid;
    grid-template-columns: repeat(3, 1fr); */
  /* column-gap: 50px;
    row-gap: 30px; */
  background: lightgray;
  /* padding: 50px; */
  border-radius: 25px;
  margin-bottom: 40px;
  width: 1240px;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const CardWrapper = styled.article`
  padding: 25px;
  &:hover {
    transform: scale(1.05);
  }
  @media screen and (max-width: 960px) {
    padding: 0;
  }
`;
