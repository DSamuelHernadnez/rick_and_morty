import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './views/Landing';
import Home from './views/Home';
import About from './views/About';
import Nav from './components/Nav/Nav.jsx';
import { useState } from 'react';
import Detail from './views/Detail';

function App() {
   const [characters, setCharacters] = useState([]);

   function onSearch(id) {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
         .then(response => response.json())
         .then(data => {
            if (data.name) {
               const exists = characters.find(c => c.id === data.id);
               if(exists) return alert("Ese personaje ya existe");
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
   }

   const onClose = (id) => {
      const filtered = characters.filter((char) => char.id !== Number(id));
      setCharacters(filtered);
   };

   return (
        <div className="App">
      <Nav onSearch = {onSearch} />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home characters={characters} onClose={onClose} />}  />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>1
    </div>
   );
}

export default App;