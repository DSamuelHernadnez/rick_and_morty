// import Cards from "../components/Cards/Cards.jsx"

// const Home = (props) => {
//     return (
//         <>
//             <div>
//                 <h1> Bienvenidos a la Home Page</h1>
//                 <Cards characters={props.characters}/>
//             </div>
//         </>
//     )
// }
// export default Home


import React from 'react';
import Cards from "../../components/Cards/Cards.jsx"
import styles from "./Home.module.css";

const Home = ({ characters, onClose }) => {
    return (
        <main className={styles.homeContainer}>
            <div className={styles.headerSection}>
                <h1 className={styles.title}>
                    SYSTEM_ACCESS: <span className={styles.highlight}>MULTIVERSE_EXPLORER</span>
                </h1>
                <div className={styles.statusLine}>
                    <span className={styles.pulse}></span>
                    ONLINE: {characters.length} ENTIDADES DETECTADAS
                </div>
            </div>

            <div className={styles.cardsWrapper}>
                <Cards characters={characters} onClose={onClose} />
            </div>
        </main>
    );
};

export default Home;