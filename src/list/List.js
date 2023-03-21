import React from "react";

export default function List(props){
    const style = {
        container: {
            display:'flex',
            justifyContent: 'space-between',
            flexDirection: props.direction,
        }
    }

    return(
        <div style={style.container}>

        </div>
    );
};