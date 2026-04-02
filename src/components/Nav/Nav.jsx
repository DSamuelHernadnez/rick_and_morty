import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Nav.module.css';

const Nav = ({ onSearch, logout }) => {
   const location = useLocation();
   const isCharactersPage = location.pathname === '/characters';

   const handleRandom = () => {
      const randomId = Math.floor(Math.random() * 826) + 1;
      onSearch(randomId);
   };

   const handleTenRandom = () => {
      if (!onSearch) return;
      for (let i = 0; i < 10; i++) {
         const randomId = Math.floor(Math.random() * 826) + 1;
         onSearch(randomId);
      }
   };

   return (
      <nav className={styles.navContainer}>
         <div className={styles.linksGroup}>
            <NavLink to="/home" className={({ isActive }) => isActive ? styles.activeLink : ""}>
               <button className={styles.navBtn}>HOME</button>
            </NavLink>

            {/* NUEVA RUTA PERSONAJES */}
            <NavLink to="/characters" className={({ isActive }) => isActive ? styles.activeLink : ""}>
               <button className={styles.navBtn}>PERSONAJES</button>
            </NavLink>

            <NavLink to="/about" className={({ isActive }) => isActive ? styles.activeLink : ""}>
               <button className={styles.navBtn}>ABOUT</button>
            </NavLink>

            {/* Estos botones solo se muestran si estamos en la ruta de Personajes */}
            {isCharactersPage && (
               <>
                  <button className={styles.randomBtn} onClick={handleRandom}>ADD_RANDOM</button>
                  <button className={styles.tenRandomBtn} onClick={handleTenRandom}>ADD_10_RANDOM</button>
               </>
            )}
         </div>
         
         <div className={styles.searchWrapper}>
            <SearchBar onSearch={onSearch} />
         </div>

         <button className={styles.logoutBtn} onClick={logout}>EXIT_SYSTEM</button>
      </nav>
   );
};

export default Nav;