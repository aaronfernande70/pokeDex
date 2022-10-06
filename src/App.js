import logo from './logo.svg';
import './App.css';
import './services/pokeDex';
import PokeList from './components/PokeList';
import getPokemon from './services/pokeDex';

let arr=[];


function App() {
  getPokemon()
  .then((pokeData)=>{
    console.log(pokeData.results)
    arr=pokeData.results;
  })



  return (
   <PokeList pokeDate= {arr}/>
  );
}

export default App;
