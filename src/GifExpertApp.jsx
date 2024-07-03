import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ]);

    const onAddCategoria = (newCategorie) => {
        //Compruebo que no este ya en el array
        if (categories.includes(newCategorie)) return;

        setCategories( [newCategorie,...categories] );
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onNewCategorie={ onAddCategoria } />

            { 
                categories.map( category => (
                    <GifGrid
                        key={ category }
                        category={ category } />
                ))
            }
            
        </>        
    )
}