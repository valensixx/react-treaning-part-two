import React, {useState} from "react";
import './DropDownMenuProps.css';

//at line 5 i am using different way of doing DDMP(perops) == DDMP({label, oprions, onChange})
export default function DDMP({label, oprions, onChange}){
    return(
        <div className="dropdown">
            <label className="dd-label">
                {label}
            </label>
            <select className="dd-select" onChange={onChange}>
                <option value ="" >Select</option>
            </select>
        </div>
    );
};