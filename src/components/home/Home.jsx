import Section from "../section/Section";

import style from "./style.module.scss";

const Home = () => {
  return (
    <div className={style.main}>
      <Section
        setRoute
        description="Clicca qui per scoprire tutti i nostri prodotti"
      >
        Products
      </Section>

      <Section description="Clicca qui per scegliere una categoria di prodotti">
        Categories
      </Section>
      <Section description="Entra nella tua area personale">User</Section>
      <Section description="Controlla i tuoi ordini">Orders</Section>
    </div>
  );
};
export default Home;
