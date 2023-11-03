import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) => {
        setInputValue( target.value )
        
    }
    const onSubmit = (e) => {
        e.preventDefault(); //evita que se recargue la pagina al dar enter en el input 
        if( inputValue.trim().length <= 1 ) return; //trim sirve para quitar espacios en blanco

        // setCategories( categories =>  [ inputValue, ...categories ]);
        onNewCategory( inputValue.trim() );
        setInputValue('');
        
    } 

  return (
    <form onSubmit={ onSubmit }>
        <input
            type="text"
            placeholder="Buscar Gifs"
            value={ inputValue }
            onChange={ onInputChange }
        /> 
    </form>
)
}


