import React, {useState} from "react";
import List from "./list/List";

//create component list with props
//items array with elements -> icon, titele, description
//width, direction(flex - row, col),
//in List component must have another component ListSingleItem, wich
//takes props - width, icon, title, description  

export default function ComponentList(){
    const items = [
        {icon: 'fa fa-pencil', title: 'Example', description: 'Example description'},
        {icon: 'fa fa-pencil', title: 'Example', description: 'Example description'},
        {icon: 'fa fa-pencil', title: 'Example', description: 'Example description'},
    ];

    return(
        <div>
            <List 
                items={items}
                width = {'30%'}
                direction = {'row'}
            />

            <List 
                items={items}
                width = {'100%'}
                direction = {'column'}
            />
        </div>
    );
};