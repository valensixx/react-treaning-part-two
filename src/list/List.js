import React from "react";
import ListSingleItem from "./ListSingleItem";

export default function List(props) {
    const style = {
        container: {
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: props.direction,
        }
    }

    return (
        <div style={style.container}>
            {props.items.map(item =>
                <ListSingleItem  
                    icon = {item.icon}
                    title = {item.title}
                    description = {item.description}
                    width = {props.width}
                />
            )}
        </div>
    );
}