import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category );
    
  
  return (
  <>
      <h3>{ category } </h3>

      {
        isLoading && ( <h2>Cargando...</h2> )// si isLoading es true, entonces muestra el h2
      }
      
      <div className="card-grid" >
        {
          images.map( ( image ) => (
            <GifItem 
              key={ image.id }
              { ...image } // Enviamos cada una de las propiedades del objeto image como una propiedad independiente
              // title={ image.title }
              // url={ image.url }
            />
          ))          
        }

      </div>
  </>
)
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}