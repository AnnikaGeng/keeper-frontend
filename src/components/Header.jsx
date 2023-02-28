import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";


function Header() {
    return (
    <header>
        <nav className="navbar navbar-expand-sm">
        <h1>Keeper</h1>
        
        <div className="btn btn-light createBtn">
          <NavLink className="nav-link" to="/CreateArea">
              Create Note
            </NavLink>
        </div>    
        
        </nav>
        
    </header>);
}

export default Header;