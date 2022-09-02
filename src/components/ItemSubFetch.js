import { useEffect, useState } from "react";



export default function ItemSubFetch({pokeitem}) {

    const subDataURL = pokeitem.url;

    const [subDatas, setSubDatas] = useState({});

    useEffect(() => {
        fetch(subDataURL)
        .then((response) => response.json())
        .then ((data) => { 
            console.log(data)
            setSubDatas(data)
        })
        .catch((error)=> console.error(error));
    }, [subDataURL]);

    console.log(subDatas)

    return (
        <div className="card">

            
                        <div key={subDatas.name}>
                            <div>{pokeitem.name}</div>
                            <img alt="" src={subDatas.sprites.default} />
                            <div>{subDatas.cost}</div>            
                        </div>

        </div>
    )
}