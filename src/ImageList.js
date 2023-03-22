import React,{useState} from "react";

/*
Create component ImageList taking arr[title, image link, and tags]
displey elements in a row, image under, title under and tags
add css - it must look good
*/

export default function ImageList(){
    const [items, setItems] = useState([
        {title: 'Nature 1', imagePath: '/images/1.jpg', tags:['nature 1', '2','third']}, 
        {title: 'Nature 2', imagePath: '/images/2.jpg', tags:['nature 1', '4','third']}, 
        {title: 'Nature 3', imagePath: '/images/3.jpg', tags:['nature 1', '8','third']}, 
    ]);
    return(
        <div>
            
        </div>
    );
};