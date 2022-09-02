import { useEffect, useState } from 'react';
import Header from './components/Header';
import ItemSubFetch from './components/ItemSubFetch';

function App() {

  const apiURL = "https://pokeapi.co/api/v2/item/";

  const [items, setItems] = useState([]);

  useEffect(() => {
      fetch(apiURL)
          .then((response) => response.json())
          .then((data) => { setItems(data.results); })
          .catch((error) => console.error(error));
  }, [apiURL]);


  return (
    <div className="App">
      <Header />
      
      {items.map((item) => {
                return <ItemSubFetch key={item.name} pokeitem={item}/>
            })}
      
    </div>
  );
}

export default App;
