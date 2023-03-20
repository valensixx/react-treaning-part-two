import React,{useState} from "react";
import SpecialBtnProps from "./SpecialBtnProps";

/*
Create reusable button with special style using props
the text of the button, color of the button and the color of the text
and function onClick()
*/

export default function SpecialBtn(){
    return(
        <div>
            <SpecialBtnProps 
                title = "Click me!"
                onClick ={()=>{
                    console.log('hello');
                }}
                color="orange"
                background="blueviolet"
            />
        </div>
    );
};