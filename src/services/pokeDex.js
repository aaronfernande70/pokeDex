const getPokemon=()=>{
return fetch(`https://pokeapi.co/api/v2/pokemon?offset=20&limit=1500`)
    .then((response)=>{
        return response.json();
    })
    
}


export default getPokemon;