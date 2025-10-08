import { Container, Dropdown } from "react-bootstrap";
import { Grid, Grid3x3 } from "react-bootstrap-icons";
import Galleria from "./Galleria";

const TvShows = () => {
  return (
    <>
      <Container fluid className=" px-4 d-flex justify-content-between">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h2 className="mb-4">TV Shows</h2>

            <Dropdown className="ms-4 mt-1">
              <Dropdown.Toggle className=" btn btn-secondary rounded-0" style={{ backgroundColor: "#221f1f" }} id="dropdown-basic">
                Genres
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Comedy</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="d-flex gap-4">
          <Grid className="fs-4 text-white"></Grid>
          <Grid3x3 className="fs-4 text-white"></Grid3x3>
        </div>
      </Container>
      <Galleria />
    </>
  );
};
export default TvShows;
