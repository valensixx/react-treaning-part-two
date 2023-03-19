import React, {useState} from "react";

//create item list with ul and il.
//onClick on item the color of the item choud change! 

export default function ItemList(){
    const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
    const [isHighlighted, setIsHighlighted] = useState([false, false, false]);

    function handleClick(index){
        //console.log(index);
        isHighlighted[index] =!isHighlighted[index];
        setIsHighlighted([...isHighlighted]);
    }

    return(
        <div>
            <ul>
                {items.map((item, index) => 
                <li key={index} onClick={() => {handleClick(index)}}>{item} - {index}</li>)}
            </ul>
            <div>{JSON.stringify(isHighlighted)}</div>
        </div>
    );
};