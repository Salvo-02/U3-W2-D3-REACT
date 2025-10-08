import { Col, Container, Row } from "react-bootstrap";
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";

const MyFooter = () => {
  return (
    <Container fluid>
      <footer>
        <Row className="row justify-content-center mt-5">
          <Col className="col col-6">
            <Row>
              <Col className="col mb-2 d-flex gap-2">
                <Facebook style={{ color: "#838383" }}></Facebook>
                <Instagram style={{ color: "#838383" }}></Instagram>
                <Twitter style={{ color: "#838383" }}></Twitter>
                <Youtube style={{ color: "#838383" }}></Youtube>
              </Col>
            </Row>
            <Row className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4">
              <Col className="col">
                <Row className="row">
                  <Col className="col footer-links">
                    <p>
                      <a href="#" alt="footer link">
                        Audio and Subtitles
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Media Center
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Privacy
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Contact us
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col className="col">
                <Row className="row">
                  <Col className="col footer-links">
                    <p>
                      <a href="#" alt="footer link">
                        Audio Description
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Investor Relations
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Legal Notices
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col className="col">
                <Row className="row">
                  <Col className="col footer-links">
                    <p>
                      <a href="#" alt="footer link">
                        Help Center
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Jobs
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Cookie Preferences
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col className="col">
                <Row className="row">
                  <Col className="col footer-links">
                    <p>
                      <a href="#" alt="footer link">
                        Gift Cards
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Terms of Use
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Corporate Information
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="row">
              <Col className="col mb-2">
                <button type="button" className="btn btn-sm footer-button rounded-0 mt-3">
                  Service Code
                </button>
              </Col>
            </Row>
            <Row className="row">
              <Col className="col mb-2 mt-2 copyright">© 1997-2023 Netflix, Inc.</Col>
            </Row>
          </Col>
        </Row>
      </footer>
    </Container>
  );
};
export default MyFooter;
