import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Nav.module.css';

const Nav = ({ onSearch, logout }) => {
   return (
      <nav className={styles.navContainer}>
         {/* Grupo de enlaces con detección de ruta activa */}
         <div className={styles.linksGroup}>
            <NavLink 
               to="/home" 
               className={({ isActive }) => isActive ? styles.activeLink : ""}
            >
               <button className={styles.navBtn}>HOME</button>
            </NavLink>

            <NavLink 
               to="/about" 
               className={({ isActive }) => isActive ? styles.activeLink : ""}
            >
               <button className={styles.navBtn}>ABOUT</button>
            </NavLink>
         </div>
         
         <div className={styles.searchWrapper}>
            <SearchBar onSearch={onSearch} />
         </div>
         <button className={styles.logoutBtn} onClick={logout}>
            EXIT_SYSTEM
         </button>
      </nav>
   );
};

export default Nav;