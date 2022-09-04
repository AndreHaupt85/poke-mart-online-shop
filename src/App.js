import { useEffect, useState } from 'react';
import Header from './components/Header';
import ItemSubFetch from './components/ItemSubFetch';

function App() {

  const apiURL = "https://pokeapi.co/api/v2/item/";

  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  
  useEffect(() => {
      fetch(apiURL)
          .then((response) => response.json())
          .then((data) => { setItems(data.results); })
          .catch((error) => console.error(error));
  }, [apiURL]);

  
  

  function addButton(pokemonName) {
    const theItem = items.find((item) => {
      return item.name === pokemonName;
    });(
      items.filter((item) => {
        return item.name !== theItem.name;
      })
    );
    setCartItems([theItem, ...cartItems]);
    // setCounter(counter + 1);
  }

  function removeButton(pokemonName) {
    const theItem = cartItems.find((item) => {
      return item.name === pokemonName;
    });

    setCartItems(
      cartItems.filter((item) => {
        return item.name !== theItem.name;
      })
    );

    setItems([theItem, ...items]);
    // setCounter(counter - 1);
  }

  return (
    <div className="App">
      <Header />
      <h2>Card</h2>
      {cartItems.map((item) => {
          return <ItemSubFetch key={item.name} onRemoveButton={removeButton} pokeitem={item}/>
          })}

      <h2>Search Items</h2>
      {items.map((item) => {
                return <ItemSubFetch key={item.name} onAddButton={addButton} pokeitem={item}/>
          })}
      
    </div>
  );
}

  //verschieben

 

  // return (
  //   <main className="App__container">
  //     <h1 className="App__title">Pokédex</h1>
  //     <div>
  //       <h2>
  //         You have caught {cardItems.length} out of {pokemons.length}{" "}
  //         Pokémon!
  //       </h2>
        
  //     </div>
  //     <div>
  //       <h2>You can still catch some Pokémon</h2>
  //       {searchItems.map((pokemon) => {
  //         return (
  //           <Card
  //             key={pokemon.id}
  //             title={pokemon.name}
  //             image={pokemon.image}
  //             types={pokemon.types}
  //             onAddCounter={addCounter}
  //             onSubtractCounter={subtractCounter}
  //           />
  //         );
  //       })}
  //     </div>
  //   </main>
  // );
    

export default App;
