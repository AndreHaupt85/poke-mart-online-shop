import { useEffect, useState } from "react";

export default function ItemFetch1() {

    const apiURL = "https://pokeapi.co/api/v2/item/";

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(apiURL)
            .then((response) => response.json())
            .then((data) => { setItems(data.results); })
            .catch((error) => console.error(error));
    }, [apiURL]);

    return (
        <ul className="app">
            {items.map((item) => {
                return <li key={item.name}>{item.name}</li>
            })}
        </ul>
    )
};