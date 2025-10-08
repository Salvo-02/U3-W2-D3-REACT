import { Bell, Person, Search } from "react-bootstrap-icons";
import logo from "../assets/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { NavLink } from "react-router";
const MyNav = () => {
  return (
    <Navbar expand="lg" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">
          <img style={{ width: "100px", height: "55px" }} src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className={({ isActive }) => `nav-link fw-bold  ${isActive ? "text-white" : "text-white-50"}`} to="/">
              Home
            </NavLink>
            <NavLink className={({ isActive }) => `nav-link fw-bold  ${isActive ? "text-white" : "text-white-50"}`} to="/tv-show">
              {" "}
              Tv Shows
            </NavLink>
            <Nav.Link className="fw-bold" href="#">
              Movies
            </Nav.Link>
            <Nav.Link className="fw-bold" href="#">
              Recently Added{" "}
            </Nav.Link>
            <Nav.Link className="fw-bold" href="#">
              My list
            </Nav.Link>
          </Nav>

          <div className=" d-flex align-items-center gap-2 ms-auto">
            <Search className="text-white"></Search>
            <div id="kids" className="fw-bold text-white">
              KIDS
            </div>
            <Bell className="text-white"></Bell>
            <Person className="text-white"></Person>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default MyNav;
