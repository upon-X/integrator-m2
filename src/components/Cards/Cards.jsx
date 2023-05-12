import Card from '../Card/Card';

const Cards = ({ characters, onClose }) => {
   return (
      <div className='gridCards'>
         {
            characters.map(({ id, name, status, species, gender, origin, image}) => {
               return (
                  <div className='gridCards__card boxCard '>
                     <Card
                        key={id}
                        id={id}
                        name={name}
                        status={status}
                        species={species}
                        gender={gender}
                        image={image}
                        origin={origin.name}
                        onClose={onClose}
                     />
                  </div>
               )
            })
         }
      </div>
   )
}

export default Cards