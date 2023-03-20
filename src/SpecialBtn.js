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
            <SpecialBtnProps/>
        </div>
    );
};