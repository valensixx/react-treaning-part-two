import React,{useState} from "react";
import InputFormProps from "./InputFormProps"
//create input form and add button.
//added elements are inport in ul from another component.
//the input must be displayed + button - delete.

export default function InputForm(props){
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
                <button onClick={() => {
                    items.push(inputValue);
                    setItems([...items]);
                    setInputValue('');
                }}>
                    Add
                </button>
            </div>
            <div>
                <InputFormProps 
                    items = {items} 
                    delete = {(index) => {
                        items.splice(index, 1);
                        setItems([...items]);
                    }}
                />
            </div>
        </div>
    );
};