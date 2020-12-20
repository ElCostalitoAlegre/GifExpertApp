import React, { useState } from 'react'
import CategoryAdd from './CategoryAdd';
import GifGrid from './GifGrid';

const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);

    //const handleAdd = (category) =>{
        //setCategories(categories => [...categories,'category']);
    //    setCategories([...categories,category]);
    //}
    return (
        <>
          <h2>GifExpertApp</h2>
          <CategoryAdd setCategories={setCategories}></CategoryAdd>
          <hr/>
          <ol>
              { 
                categories.map(category => (
                    //<li key={category}>{category}</li>
                    <GifGrid
                        key={category}
                        category={category}>
                        
                    </GifGrid>)
                ) 
              }
          </ol>
        </>
    )
}

export default GifExpertApp
