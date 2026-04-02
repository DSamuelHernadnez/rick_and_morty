import React from 'react';
import styles from './Home.module.css';

const Home = () => {
   return (
      <div className={styles.homeContainer}>
         <div className={styles.scanline}></div>
         
         <div className={styles.content}>
            <div className={styles.titleWrapper}>
               <h1 className={styles.mainTitle}>RICK AND MORTY <span className={styles.cyan}>DATABASE</span></h1>
            </div>

            <div className={styles.infoCard}>
               <h2 className={styles.sectionTitle}>[ DATA_OVERVIEW ]</h2>
               <p className={styles.description}>
                  Bienvenido al archivo central de la Ciudadela. 
                  Sumérgete en la historia de Rick and Morty, monstruos y anomalías a través del multiverso conocido.
               </p>

               {/* --- CONTENEDOR DEL VIDEO --- */}
               <div className={styles.videoWrapper}>
                  <iframe 
                     width="100%" 
                     height="100%" 
                     src="https://www.youtube.com/embed/EcGAN6rKuOw" 
                     title="Rick and Morty Video" 
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                     allowFullScreen
                     className={styles.videoIframe}
                  ></iframe>
                  <div className={styles.videoOverlay}></div>
               </div>

               <p className={styles.description}>
                  Rick y Morty es una serie que explora las desventuras de un científico sociópata 
                  y su nieto a través de dimensiones infinitas, desafiando las leyes de la física 
                  y la moralidad intergaláctica.
               </p>
            </div>

            <div className={styles.warningBox}>
               <p>ADVERTENCIA: ESTAMOS EN PRUEBA Y ERROR // ACCESO RESTRINGIDO</p>
            </div>
         </div>
      </div>
   );
};

export default Home;