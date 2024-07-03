/*import { useEffect, useState } from 'react';*/
import { GifItem } from './GifItem';
/* import { getGifs } from '../helpers/getGifs'; */
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { images,isLoading } = useFetchGifs(category);

    /*
    const [images, setImages] = useState([]); 

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }
    
    //Con esto nos aseguramos que la funcion getGifs se ejecute una sola vez, si no lo ejectaria cada vez que se renderice
    useEffect(() => {
       // getGifs(category)
       //     .then( newImages => setImages(newImages));

       getImages();
    }, []);
    */
    

  
    return (
        <div>
            <h3>{ category }</h3>
            { isLoading && (<h2>Cargando...</h2>) }
            <div className='card-grid'>
                {
                    images.map( (image) => (
                        <GifItem 
                            key={ image.id } 
                            { ...image }
                        />                                                
                    ))
                }
            </div>
        </div>       
    )
}