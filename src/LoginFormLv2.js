import React,{useState} from "react";

/*
Create login form with userName and password.
Create function login with onClick - Button.
If user enters userName = 'user1' and pass = 'user1pass'
the form hides itself and displays 'Welcome, User1!'
*/

export default function LoginForm(){
    return (
        <div style={{marginTop:'20px'}}>
            <h1>Login Form Lv2</h1>
            <div>
                <label>Username</label>
                <input type="text"/>
            </div>
            <div>
                <label>Password</label>
                <input type="password"/>
            </div>
            <div>
                <button type="button">Login</button>
            </div>
        </div>
    );
};