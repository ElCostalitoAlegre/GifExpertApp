
export const getGifs = async(query) => {
    if(query.trim().length > 0){
        const api_key = process.env.REACT_APP_api_key;
        const endPoint = `${process.env.REACT_APP_giphyHost}/search`;
        const url = `${endPoint}?api_key=${api_key}&q=${query}&limit=10`;
        const res = await fetch(url);
        const {data} = await res.json();
        const gifs = data.map( ({id,title,images:{downsized_medium}}) =>{
            return({
                id: id,
                title: title.trim() !== ''? title:'Gif',
                url: downsized_medium?.url
            })
        });
        return gifs;
    }else{
        return [];
    }
    
    
}
 
