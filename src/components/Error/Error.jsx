import React from 'react';
import styles from './Error.module.css';

const Error = () => {
    return (
        <div className={styles.errorContainer}>
            <h1 className={styles.errorCode}>404</h1>
            <div className={styles.errorMsg}>
                CRITICAL_ERROR: ROUTE_NOT_FOUND
            </div>
            <p style={{color: '#b0b0b0', marginTop: '20px'}}>
                El multiverso es vasto, pero esta ruta no existe.
            </p>
        </div>
    );
};

export default Error;