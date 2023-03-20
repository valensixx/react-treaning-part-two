import React, {useState} from "react";
import HelloNameProps from "./HelloNameProps";

// Create component with props [name]. It must dispay Hello, [name].

export default function HelloName(){
    const name = "Todor";
    const [nameExample, setNameExample] = useState('Petur');
    return(
        <div>
           <HelloNameProps name="Gosho" />
           <HelloNameProps name={"Pesho"} />
           <HelloNameProps name={name} />
           <HelloNameProps name={nameExample} />
        </div>
    );
};