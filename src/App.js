import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Home from './views/Home/Home.jsx';
import About from './views/About/About.jsx';
import Detail from './views/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';
import Nav from './components/Nav/Nav.jsx';
import Error from './components/Error/Error.jsx'
import Cards from './components/Cards/Cards.jsx'
import './App.css';

function App() {
   const { pathname } = useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);

   // --- ESTADOS DE SEGURIDAD (EJERCICIO 5) ---
   const [access, setAccess] = useState(false);
   const EMAIL = 'dpina5596@gmail.com';
   const PASSWORD = 'TuPasswor1';

   // --- LÓGICA DE ACCESO (EJERCICIO 6) ---
   function login(userData) {
      if (userData.email === EMAIL && userData.password === PASSWORD) {
         setAccess(true);
         navigate('/home');
      } else {
         alert("CREDENCIALES INVÁLIDAS: Acceso denegado.");
      }
   }

   // --- EJERCICIO EXTRA: FUNCIÓN LOGOUT ---
   function logout() {
      setAccess(false);
      navigate('/');
   }

   // --- PROTECCIÓN DE RUTAS (EJERCICIO 5) ---
   // useEffect(() => {
   //    !access && navigate('/');
   // }, [access, navigate]);
   useEffect(() => {
      const validRoutes = ['/home', '/about', '/detail'];
      const isDetailRoute = pathname.startsWith('/detail/');
      if (!access && (validRoutes.includes(pathname) || isDetailRoute)) {
         navigate('/');
      }
   },
      [access, navigate, pathname]);

   // --- LÓGICA DE PERSONAJES ---
   function onSearch(id) {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
         .then(res => res.json())
         .then(data => {
            if (data.name) {
               const exists = characters.find(c => c.id === data.id);
               if (exists) return alert("Entidad ya registrada.");
               setCharacters((old) => [...old, data]);
            } else {
               alert("ID no encontrado.");
            }
         });
   }

   const onClose = (id) => {
      setCharacters(characters.filter(char => char.id !== Number(id)));
   };

   function onSearch(id) {
      // 1. Validar si ya existe antes de hacer el fetch para ahorrar recursos
      const exists = characters.find(c => c.id === Number(id));
      if (exists) return alert("Entidad ya registrada.");

      fetch(`https://rickandmortyapi.com/api/character/${id}`)
         .then(res => res.json())
         .then(data => {
            // 2. Validar que la API devolvió un personaje
            if (!data.name) return alert("ID no encontrado.");

            // 3. Doble check por seguridad y actualización de estado
            setCharacters((old) => [...old, data]);
         })
         .catch(err => alert("Error en la conexión con la base de datos."));
   }

   return (
      <div className="App">
         {/* Se muestra Nav solo si no estamos en el login y pasamos logout */}
         {pathname !== '/' && <Nav onSearch={onSearch} logout={logout} />}

         <Routes>
            <Route path='/' element={<Form login={login} />} />
            {/* <Route path='/home' element={<Home characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} /> */}
            <Route path="/home" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/characters" element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/detail/:id' element={<Detail />} />
            {/* RUTA DE ERROR 404 */}
            <Route path='*' element={<Error />} />
         </Routes>
      </div>
   );
}

export default App;