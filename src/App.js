import React, {useState} from "react"; 
import Hello from "./Hello";
//create component with text "hello, how are you?".
//create button witj var isShown with value false.
//OnClick isShown == ture and the text is shown.

export default function App(){
    const[isShown, setIsShown] = useState(false);
    return(
        <div>
            <button onClick = {()=>{
                setIsShown(!isShown);
            }}>Click me!</button>
            {isShown ? < Hello /> : ''} 
            {isShown && < Hello />} 
        </div>
    );
};