import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
 
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => { // Lo usamos para que no se vuelva a renderizar el componente cada vez que cambia el estado
        getImages();
    }, [])

 
    return{
        images,
        isLoading,
    }

}

