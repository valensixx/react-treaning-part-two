import React,{useState} from "react";



export default function SpecialBtnProps(props){
    const btnStyles = {
        border: "none",
        padding: "5px 30px",
        textTransform: "uppercase",
        cursor: "pointer",
        color: props.color ?? "white",
        background: props.background ?? 'orange',
    };

    return(
        <>
            <button onClick={props.onClick} style={btnStyles}>
                {props.title}
            </button>
        </>
    );
};