import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = ( newCategory ) => {

      if ( categories.includes(newCategory) ) return; //si el elemento ya existe en el array, no lo agrega, asi evitamos el error de duplicados (key)
      // console.log(newCategory);
      setCategories([  newCategory , ...categories ])
    }


  return (
    <>
        <h1>Busca tu Gif favorito :D </h1>

        <AddCategory 
          onNewCategory = { value => onAddCategory(value) }
          />       
        
            { categories.map( (category) => (
                  <GifGrid 
                    key= { category } 
                    category={ category } 
                  />
                ))
             }        
    </>
  )
}


