import { useState } from 'react';
import style from './NavBar.module.css'

const SearchBar = ({ onSearch }) => {
   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value);
   }
   return (
      <div className={style.buscador}>
         <input className={style.searchField} type='search' onChange={handleChange} value={id}/>
         <button className={style.searchBoton} onClick={() => { onSearch(id) }}>Agregar</button>
      </div>
   );
}
export default SearchBar