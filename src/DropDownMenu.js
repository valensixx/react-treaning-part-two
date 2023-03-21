import React, { useState } from "react";
import DropDownMenuProps from './DropDownMenuProps';
//create drop down menu with style props text on top of the menu, list of elements and func onChange.

export default function DropDownMenu() {
    const options = [
        { label: 'Option 1', value: 1 },
        { label: 'Option 2', value: 2 },
        { label: 'Option 3', value: 3 },
    ];
    return (
        <div>
            <DropDownMenuProps />
        </div>
    );
};