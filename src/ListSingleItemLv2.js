import React, { useState } from "react";

export default function LSIL2(props) {
    const [isShown, setIsShown] = useState(false);
    return (
        <>
            <div>
                <span>
                    {props.name} {props.lastName}
                </span>
                <button onClick={()=>{
                    setIsShown(!isShown);
                }}>Show description</button>
            </div>
            {isShown &&
                <div>
                    {props.description}
                </div>
            }
        </>
    );
};