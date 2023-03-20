import React, {useState} from "react";

/*
crearte array with a few strings.
create list with text of the elements and checkboxes
create a counter in the component 
the counter shows all of the active checkboxes
*/

export default function CheckBox(){
    const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
    const [counter, setCounter] = useState(0);

    function renderLi(item){
        return(
            <li>
                <input 
                    type="checkbox"
                    onClick={(e) => {
                        if(e.target.checked){
                            alert('example');
                        }
                    }} 
                />
                <span>{item}</span>
            </li>
        );
    };

    return(
        <div >
            <div>Counter: {counter} </div>
            {items.map(renderLi)}
        </div>
    );
};