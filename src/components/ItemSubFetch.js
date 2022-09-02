import { useEffect, useState } from "react";



export default function ItemSubFetch({pokeitem}) {
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


    return (
        <div className="card">
                        <div key={subDatas.name}>
                            <div>{pokeitem.name}</div>
                            {subDatas.sprites.default ? <img alt="" src={subDatas.sprites.default} /> : ''}
                            <div>{subDatas.cost}</div> 
                            <button type="button" onClick>Add Item</button>           
                        </div>
        </div>
    )
}