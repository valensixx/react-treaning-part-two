import React, { useState } from "react";

export default function IFProps(props) {

    function renderLi(item, index) {
        return (
            <li>
               <span>{item}</span> 
               <button onClick={()=>{
                    props.delete(index)
               }}>
                Delete
                </button>
            </li>
        );
    };

    return (
        <>
            <ul>
                {props.items.map(renderLi)}
            </ul>
        </>
    );
};