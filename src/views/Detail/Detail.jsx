// import { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom"

// const Detail = () => {
//     const params = useParams();
//     const [user, setUser] = useState({})
//     // const { id } = useParams();
//     console.log(params.id);
//     // console.log(id);

//     useEffect(() => {
//         fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
//             .then(res => res.json())
//             .then(data => setUser(data)
//             )
//     }, [])

//     return (
//         <div>
//             <h1>{user.name}</h1>
//             <h1>{user.username}</h1>
//             <h1>{user.email}</h1>
//             <h1>{user.phone}</h1>
//             <Link to={user.website}>
//                 <p>{user.website}</p>
//             </Link>
//         </div>
//     )
// }
// export default Detail

// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';

// const Detail = () => {
//     const { id } = useParams();
//     const [character, setCharacter] = useState({});

//     useEffect(() => {
//         fetch(`https://rickandmortyapi.com/api/character/${id}`)
//             .then((res) => res.json())
//             .then((data) => {
//                 if (data.name) {
//                     return setCharacter(data);
//                 }
//                 window.alert('No hay personajes con ese ID');
//             });

//         return () => setCharacter({});
//     }, [id]);

//     return (
//         <div>
//             <Link to="/home">
//                 <button>Volver</button>
//             </Link>
//             {character.name && (
//                 <div className="detail-content">
//                     <h1>{character.name}</h1>
//                     <img src={character.image} alt={character.name} />

//                     <div className="detail-info">
//                         <h3>Status: {character.status}</h3>
//                         <h3>Especie: {character.species}</h3>
//                         <h3>Género: {character.gender}</h3>
//                         <h3>Origen: {character.origin?.name}</h3>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Detail;

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './Detail.module.css';

const Detail = () => {
   const { id } = useParams();
   const [character, setCharacter] = useState({});

   useEffect(() => {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
         .then((res) => res.json())
         .then((data) => {
            if (data.name) {
               return setCharacter(data);
            }
            window.alert('No hay personajes con ese ID');
         });
      
      return () => setCharacter({});
   }, [id]);

   return (
   <div className={styles.container}>
      <Link to="/home">
         <button className={styles.backBtn}>Volver</button>
      </Link>

      {character.name && (
         <div className={styles.detailPanel}>
            
            {/* Sección de la Imagen Gigante */}
            <div className={styles.imageSection}>
               <img src={character.image} alt={character.name} className={styles.image} />
            </div>

            {/* Sección de la Información */}
            <div className={styles.infoSection}>
               <h1>{character.name}</h1>
               
               <div className={styles.detailsData}>
                  {character.status && (
                     <div className={styles.dataLine}>
                        <span className={styles.dataLabel}>Status:</span> 
                        <span className={styles.dataValue}>{character.status}</span>
                     </div>
                  )}
                  {character.species && (
                     <div className={styles.dataLine}>
                        <span className={styles.dataLabel}>Especie:</span> 
                        <span className={styles.dataValue}>{character.species}</span>
                     </div>
                  )}
                  {/* ... repite este patrón para Gender y Origin ... */}
               </div>
            </div>
         </div>
      )}
   </div>
);
};

export default Detail;