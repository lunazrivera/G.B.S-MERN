import React from "../../node_modules/react";
import {Link} from "../../node_modules/react-router-dom";
import "./Nav.css"

function Nav() {
     return <nav className="nav-bar">
          <h2 className="header">Google Books Search</h2>
          <Link className="nav-links" to="/">Search</Link>
          <Link className="nav-links" to="/saved">Saved</Link>
     </nav>
}

export default Nav;