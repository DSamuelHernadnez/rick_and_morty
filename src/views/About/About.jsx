import React from 'react';
import styles from './About.module.css';

const About = () => {
   const profileImg = "https://i.pinimg.com/1200x/b4/37/23/b4372333257adc7c1d702364ad6fdc26.jpg";

   return (
      <div className={styles.aboutContainer}>
         {/* Capa de líneas de escaneo (Estilo Home) */}
         <div className={styles.scanline}></div>

         <div className={styles.profileCard}>
            {/* --- HEADER CON IMAGEN HEXAGONAL --- */}
            <div className={styles.header}>
               <div className={styles.avatarWrapper}>
                  <img src={profileImg} alt="David Hernández" className={styles.profileImg} />
                  <div className={styles.scannerOverlay}></div>
                  <div className={styles.glitchInner}>DH</div>
               </div>

               <div className={styles.titleGroup}>
                  <h1 className={styles.userName}>DAVID HERNÁNDEZ</h1>
                  <p className={styles.role}>SOFTWARE DEVELOPER & GROWTH PARTNER</p>
                  <div className={styles.statusIndicator}>
                     <span className={styles.statusDot}></span>
                     STATUS: ONLINE // SYSTEM_READY
                  </div>
               </div>
            </div>

            {/* --- CONTENIDO CON MISSION LOG --- */}
            <div className={styles.content}>
               <div className={styles.section}>
                  <h3 className={styles.sectionTitle}>[ MISSION LOG ]</h3>
                  <p className={styles.missionText}>
                     Estudiante de programación enfocando mis estudios hacia el desarrollo de mini empresas. 
                     Creando y consolidando mi propia marca: <span className={styles.brand}>WorderMark</span>.
                  </p>
               </div>

               <div className={styles.techSection}>
                  <h3 className={styles.sectionTitle}>[ SKILLS_MATRIX ]</h3>
                  <div className={styles.techStack}>
                     <div className={styles.skill}><span>{'>'}</span> REACT</div>
                     <div className={styles.skill}><span>{'>'}</span> JAVASCRIPT</div>
                     <div className={styles.skill}><span>{'>'}</span> GROWTH PARTNER</div>
                  </div>
               </div>
            </div>

            {/* --- FOOTER DE SEGURIDAD --- */}
            <div className={styles.footer}>
               <div className={styles.securityTag}>SECURITY LEVEL: CLEARANCE ALPHA</div>
               <div className={styles.versionTag}>V2026 // SYNC_ACTIVE</div>
            </div>

            {/* Decoración de esquina */}
            <div className={styles.cornerDecor}></div>
         </div>
      </div>
   );
}

export default About