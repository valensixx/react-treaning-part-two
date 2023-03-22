import React,{useState} from "react";

//create input form and add button.
//added elements are inport in ul from another component.
//the input must be displayed + button - delete.

export default function InputForm(){
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');
    return (
        <div>
            <div>
                <input 
                    type = "text"
                    value = {inputValue}
                    onInput = {(e) =>{
                        setInputValue(e.target.value);
                    }} 
                />
                <button>
                    Add
                </button>
            </div>
        </div>
    );
};