import React, { useState } from 'react';
import styles from './SearchBar.module.css'; 

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState("");
   const handleChange = (event) => {
      setId(event.target.value);
   };

   return (
      <div className={styles.bar}>
         <input 
            type='search' 
            placeholder="Introduce un ID..." 
            onChange={handleChange}
            value={id}
            className={styles.searchInput}
         />
         <button 
            className={styles.searchButton}
            onClick={() => { onSearch(id); setId(""); }} //mejorar esta funcion a funcion handler
         >
            Agregar
         </button>
      </div>
   );
}
