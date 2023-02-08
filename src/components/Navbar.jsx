import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

export default function Navbar() {
  return (
    <Nav className="navbar navbar-dark bg-dark">
      <div>
        <h2>POKEMÓN</h2>
      </div>
      <div className="d-flex gap-2">
        <NavLink
          to="/"
          className="btn btn-outline-light"
          
        >Home
        </NavLink>
        <NavLink
          to="/pokemones"
          className="btn btn-outline-info me-2"
        >Buscar Pokemon
        </NavLink>
      </div>
    </Nav>
  );
}
