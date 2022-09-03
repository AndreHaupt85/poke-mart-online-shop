import { useEffect, useState } from "react";



export default function ItemSubFetch({pokeitem, onAddButton, onRemoveButton}) {
console.log(pokeitem)
    const subDataURL = pokeitem.url;

    const [subDatas, setSubDatas] = useState({
        sprites: {
            default: ''
        }
    });

    useEffect(() => {
        fetch(subDataURL)
        .then((response) => response.json())
        .then ((data) => { 
            setSubDatas(data)
        })
        .catch((error)=> console.error(error));
    }, [subDataURL]);

    function handleAddClick() {
        onAddButton(pokeitem.name);
      }
      
      function handleRemoveClick() {
        onRemoveButton(pokeitem.name);
      }
    



    return (
        <div className="card">
                        <div key={subDatas.name}>
                            <div>{pokeitem.name}</div>
                            {subDatas.sprites.default ? <img alt="" src={subDatas.sprites.default} /> : ''}
                            <div>{subDatas.cost}</div> 
                            <button type="button" onClick={handleAddClick}>Add Item</button> 
                            <button type="button" onClick={handleRemoveClick}>Remove Item</button>          
                        </div>
        </div>
    )
}