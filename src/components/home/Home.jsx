import Section from "../section/Section";
import styled, { css } from "styled-components";

const Home = () => {
  const Main = styled.div`
    background-color: black;
    display: flex;
    flex-direction: column;

    ${(props) =>
      props.primary &&
      css`
        background: palevioletred;
        color: white;
        min-width: 80px;
        border: 1px solid white;
        padding: 25px;
      `};
  `;
  return (
    <Main>
      <Main
        primary
        setRoute
        description="Clicca qui per scoprire tutti i nostri prodotti"
      >
        Products
      </Main>

      <Main
        primary
        description="Clicca qui per scegliere una categoria di prodotti"
      >
        Categories
      </Main>
      <Main primary description="Entra nella tua area personale">
        User
      </Main>
      <Main primary description="Controlla i tuoi ordini">
        Orders
      </Main>
    </Main>
  );
};
export default Home;
