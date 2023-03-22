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
        },

        tag:{
            background: 'silver',
            color: 'blueviolet',
            borderRadius: '20px',
            margin: 10,
            padding: 5,
        }
    }

    function renderSingleImage(item){
        return(
            <div style={style.innerContainer}>
                <img 
                    src={item.imagePath}
                    style={style.imagePath}
                />
                <h3>{item.title}</h3>
                {item.tags.map(i => <span style={style.tag}>{i}</span>)}
            </div>
        );
    }

    return(
        <div style={style.container}>
            {props.items.map(renderSingleImage)}
        </div>
    );
};