import { useEffect, useState } from "react";
import styled from "styled-components";
import ItemSubFetch from "./ItemSubFetch";

export default function ItemMainFetch() {

    const apiURL = "https://pokeapi.co/api/v2/item/";

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(apiURL)
            .then((response) => response.json())
            .then((data) => { setItems(data.results); })
            .catch((error) => console.error(error));
    }, [apiURL]);


    return (
        <div className="app">
            {items.map((item) => {
                return <ItemSubFetch key={item.name} pokeitem={item}/>
            })}
        </div>
    )
};


const ItemSubfetch = styled.div`
    background-color: #6699CC;
    margin: 10px;
    padding: 10px;
    border: 2px solid black;
`