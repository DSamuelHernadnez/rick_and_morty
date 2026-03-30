import React, { useState } from 'react';
import { validate } from '../../utils/validation';
import styles from './Form.module.css';

const Form = ({ login }) => { // 1. Recibimos la función login por props
   const [userData, setUserData] = useState({ email: '', password: '' });
   const [errors, setErrors] = useState({});

   const handleChange = (event) => {
      setUserData({
         ...userData,
         [event.target.name]: event.target.value
      });

      setErrors(validate({
         ...userData,
         [event.target.name]: event.target.value
      }));
   };

   // EJERCICIO 6: Función para procesar el envío del formulario
   const handleSubmit = (event) => {
      event.preventDefault(); // Evitamos que la página se recargue
      login(userData);       // Enviamos los datos al App.js para el acceso
   };

   return (
      <div className={styles.loginContainer}>
         <form className={styles.loginForm} onSubmit={handleSubmit}>
            <div className={styles.header}>
               <h2>SYSTEM_LOGIN</h2>
               <p>IDENTIFY_YOURSELF</p>
            </div>
            
            <div className={styles.inputGroup}>
               <label>USER_EMAIL:</label>
               <input 
                  type="text" name="email"
                  value={userData.email} onChange={handleChange} 
                  className={errors.email ? styles.errorInput : ""}
               />
               {errors.email && <span className={styles.errorText}>{errors.email}</span>}
            </div>

            <div className={styles.inputGroup}>
               <label>ACCESS_KEY:</label>
               <input 
                  type="password" name="password"
                  value={userData.password} onChange={handleChange}
                  className={errors.password ? styles.errorInput : ""}
               />
               {errors.password && <span className={styles.errorText}>{errors.password}</span>}
            </div>

            <button type="submit" className={styles.submitBtn}>
               LOGIN
            </button>
         </form>
      </div>
   );
};

export default Form;