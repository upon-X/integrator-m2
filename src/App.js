import './App.css';
import Cards from './components/Cards/Cards';
import NavBar from './components/Nav/NavBar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Form from './components/Form/Form';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';
import Favorites from './components/Favorites/Favorites';
const EMAIL = 'valemiche003@gmail.com'
const PASSWORD = 'papa123'

function App() {        //Componente
   const [/*estado*/characters,/*funcion seteadora del estado*/ setCharacters] = useState(/*Estado Inicial*/[])
   const { pathname } = useLocation()

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   const onClose = (id) => {
      setCharacters(
         characters.filter((char) => {
            return char.id !== Number(id);
         })
      );
   };
   return (          //Renderiza el sig contenedor <div>
      <div className='App'>
         {pathname !== '/' && <NavBar onSearch={onSearch} />}
         <Routes>
            <Route path='/' element={<Form login={login}/>} />
            <Route path='/favorites' element={<Favorites/>} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About/>} />
            <Route path='/detail/:id' element={<Detail/>} />
         </Routes>

      </div>
   );
}

export default App;
