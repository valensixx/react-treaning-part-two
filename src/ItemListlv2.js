import React, {useState} from "react";

/*
Create component List with arr[name,f-name,description].
in that List component we have another ListSingleItemLv2 (it take one single element from the arr)
ListSingleItemLv2 displays name,f-name,description and button('more info')
onClick 'More info' - more info is shown.
*/

export default function ILv2(){
    const [items, setItems] = useState([
        {name:'Gosho', lastName:'Goshev', description:'Gosho is web developer, Rect user and bodybuilder.'},
        {name:'Pesho', lastName:'Peshev', description:'Pesho is web developer, Rect user and great guitar player.'}, 
        {name:'Ivan', lastName:'Ivanov', description:'Ivan is backend developer, Rect user and car lover.'},
    ]);

    return(
        <div>
            
        </div>
    );
};