import React,{useState} from "react";

export default function ILP(props){
    const style = {
        container: {
            display:'flex',
            justifyContent: 'space-between'
        },
        innerContainer:{
            padding: 10,
            textAlign: 'center'
        },
        img: {
            width: '100%',
        }
    }

    function renderSingleImage(item){
        return(
            <div>
                <img 
                    src={item.imagePath}
                    style={style.imagePath}
                />
                <h3>{item.title}</h3>
            </div>
        );
    }

    return(
        <div style={style.container}>
            {props.items.map(renderSingleImage)}
        </div>
    );
};