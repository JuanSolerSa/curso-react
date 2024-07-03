import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]); 
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }
    
    //Con esto nos aseguramos que la funcion getGifs se ejecute una sola vez, si no lo ejectaria cada vez que se renderice
    useEffect(() => {
       // getGifs(category)
       //     .then( newImages => setImages(newImages));

       getImages();
    }, []);

    return {
        images,
        isLoading
    }
    

}