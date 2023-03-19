import React, { useState } from "react";

export default function LoginFormLogics(props) {
    return (
        <div>
            <div>
                <label>Username</label>
                <input type="text"
                    name="username"
                    onInput={props.handleInput}
                />
            </div>
            <div>
                <label>Password</label>
                <input type="password"
                    name="password"
                    onInput={props.handleInput}
                />
            </div>
            <div>
                <button onClick={props.login} type="button">Login</button>
            </div>
        </div>
    );
};