import { Container } from "react-bootstrap";
import MyCarousel from "./MyCarousel";

const Galleria = () => {
  return (
    <Container fluid>
      <MyCarousel title="Watch it Again" search="Harry Potter" />
      <MyCarousel title="Saghe" search="pirates of the caribbean" />
      <MyCarousel title="The lord of the rings" search="the lord of the rings" />
    </Container>
  );
};
export default Galleria;
