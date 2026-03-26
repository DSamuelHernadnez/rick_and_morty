import React from 'react';
import styles from './Card.module.css'

export default function Card(props) {
   return (
      <div className= {styles.card}>
         <button className={styles.closeBtn} onClick={() => props.onClose(props.id)}>
            X
         </button>
         <img src={props.image} alt={props.name} className={styles.cardImage} />
         <div className={styles.info}>
            <h2>{props.name}</h2>
            <p>Especie: {props.species}</p>
            <p>Género: {props.gender}</p>
         </div>
      </div>
   );
}