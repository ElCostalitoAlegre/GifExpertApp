import { useEffect, useState } from "react"
import { getGifs } from "../services/gifAPIClient";

//Custom hook 
export const useFetchGifs = (category) =>{
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });
    //los efectos no pueden ser async
    useEffect( () =>{
        getGifs(encodeURI(category)).then
        ( res => setState({
                data:res,
                loading:false,
            }
        ));
      },[ category ]); //si la categoria cambia se vuelve a aplicar el useEffect
  
    return state; // {data:[],loading:true}

}