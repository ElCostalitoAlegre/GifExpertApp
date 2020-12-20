import React, { useState } from 'react'
import PropTypes from 'prop-types'

//Componente padre GifExpertApp
const CategoryAdd = ({setCategories}) => {

    //El inputValue vive en el state de la aplicación (recordar).

    const [inputValue, setInputValue] = useState('');
    // e.target.value será el nuevo valor del input value
    const handleInputChange = ({target:{value}}) => setInputValue(value);
    
    const handleSubmit = (e) =>{
        //previene el refresh
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategories(categories => [inputValue,...categories] );
            setInputValue('');
        }else{
            alert('Minimun Category length 2 is required')
        }
    
    }
    //El fragment agrupa los elementos html y no es necesario si hay una etiqueta que cumpla esta función (form)
    return (
        <form onSubmit={handleSubmit}>
            <input  
                type="text" 
                placeholder="Type a category..."
                value={inputValue}
                onChange={ handleInputChange }
            />
        </form>
        
    )
}

export default CategoryAdd
CategoryAdd.propTypes = {
    setCategories: PropTypes.func.isRequired,
}
