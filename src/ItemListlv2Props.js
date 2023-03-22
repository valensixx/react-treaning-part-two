import React, { useState } from "react";
import LSIL2 from "./ListSingleItemLv2";

export default function ILv2Props(props) {
    return (
        <div>
            {props.items.map(item =>
                <LSIL2
                    name={item.name}
                    lastName={item.lastName}
                    description={item.description}
                />)}
        </div>
    );
};