import { useState } from 'react';

export const AddCategory = ({ onNewCategorie}) => {

    const [inputValue, setInputValue] = useState('');
    const onInputChange = (event) => {
        setInputValue( event.target.value );
    }
    const onSubmit = (event) => {
        //Para evitar el recargado de la página
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;

        onNewCategorie(inputValue);

        //existen dos maneras de utilizar setState.
        // La primera es simplemente asignando directamente el valor que deseas que tenga el estado, 
        // la segunda forma es a través de un callback, donde el parámetro es el estado actual.
        // Lo interesante del setState es que siempre mantiene internamente el valor de su estado, 
        //setCategories( categories => [inputValue,...categories] ); 

        //Limpioo el input
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifs..."
                value={ inputValue}
                onChange={ onInputChange }
            />
        </form>
    )
}