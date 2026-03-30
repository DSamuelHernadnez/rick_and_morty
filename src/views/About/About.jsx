import React from 'react';
import styles from './About.module.css';

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.profileCard}>
                <div className={styles.header}>
                    <div className={styles.avatarPlaceholder}>
                        {/* Aquí puedes poner tu foto luego */}
                        <div className={styles.glitchInner}>DH</div>
                    </div>
                    <div className={styles.titleGroup}>
                        <h1>DAVID HERNÁNDEZ</h1>
                        <p className={styles.role}>SOFTWARE DEVELOPER & GROWTH PARTNER</p>
                    </div>
                </div>

                <div className={styles.content}>
                    <div className={styles.section}>
                        <h3 className={styles.sectionTitle}>MISSION_LOG:</h3>
                        <p>
                           Estudiante de programcion enfocando mis estudios hacia el desarollo de mini empresas
                        , Crenado y consolidando mi empresa : <span className={styles.brand}>WorderMark</span>, .
                        </p>
                    </div>

                    <div className={styles.techStack}>
                        <div className={styles.skill}>REACT</div>
                        <div className={styles.skill}>JAVASCRIPT</div>
                        <div className={styles.skill}>GROWTH_PHARNET</div>
                    </div>
                </div>

                <div className={styles.footer}>
                    <span>SECURITY_LEVEL: CLEARANCE_ALPHA</span>
                    <span>2026_VERSION</span>
                </div>
            </div>
        </div>
    );
}

export default About;