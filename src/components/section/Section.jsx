import style from "./style.module.scss";

const Section = ({ children, description, setRoute }) => {
  const x = () => setRoute({ children });
  return (
    <section onClick={x}>
      <h1>{children}</h1>
      <p>{description}</p>
    </section>
  );
};

export default Section;
