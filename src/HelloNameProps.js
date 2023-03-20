import React, {useState} from "react";

export default function HelloNameProps(props){
    return(
        <div>
            Hello,{props.name}!
        </div>
    );
};