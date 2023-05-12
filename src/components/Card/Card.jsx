import { Link } from 'react-router-dom'
import { addFav, removeFav } from '../../Redux/actions'
import { connect } from 'react-redux'
import { useState, useEffect } from 'react';

const Card = ({ id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites }) => {
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      isFav ? removeFav(id) : addFav({ id, name, status, species, gender, origin, image, onClose });
      setIsFav(!isFav)
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div >
         {
            (
               <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>)
         }
         <div className="botonX">
            <button onClick={() => { onClose(id) }}>X</button>
         </div>
         <Link to={`/detail/${id}`}>
            <div className="imagenCard noPointer">
               <img src={image} alt="character image" />
            </div>
            <div className="descCard noPointer ">
               <p>Nombre: {name}</p>
               <p>Estado: {status}</p>
               <p>Especie: {species}</p>
               <p>Genero: {gender}</p>
               <p>Origen: {origin}</p>
            </div>
         </Link>
      </div>
   );
}


const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id)),
   }
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
};


export default connect(mapStateToProps, mapDispatchToProps)(Card)


