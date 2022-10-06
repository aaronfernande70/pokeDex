import React from 'react'

import PokeCard from './PokeCard';


let PokeList=(props)=>{

    
    const item_name = props.pokeDate.map(pokemon=><PokeCard pokeDetails={pokemon}/>);
    // console.log(item_name)
    return(
    <React.Fragment>
        {item_name}
    </React.Fragment>
    )}





export default PokeList;