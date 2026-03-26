import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
      <nav>
         <NavLink to="/home">
            <button>Home</button>
         </NavLink>
         <NavLink to="/about">
            <button>About</button>
         </NavLink>
         
         <SearchBar onSearch={props.onSearch} />
      </nav>
    );
}
export default Nav;