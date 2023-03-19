import React, { useState } from "react";
import LoginFormLogics from "./LoginFormLogics";
/*
Create login form with userName and password.
Create function login with onClick - Button.
If user enters userName = 'user1' and pass = 'user1pass'
the form hides itself and displays 'Welcome, User1!'
*/

/*
New Task:
Move login form in new component and keep the same functionality
*/

export default function LoginForm() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [isLogged, setIsLogged] = useState(false);

    function handleInput(event) {

        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });

        //const name = event.target.name;
        //const value = event.target.value;
        //console.log(event.target.value);
        //console.log(event.target.name);
    }

    function login() {
        if (formData.username == 'user1' && formData.password == 'user1pass') {
            setIsLogged(true);
        }
    }

    return (
        <div style={{ marginTop: '20px' }}>
            <h1>Login Form Lv2</h1>
            <div>
                {JSON.stringify(formData)}
            </div>
            {!isLogged && <LoginFormLogics handleInput = {handleInput}  login = {login} /> }
            {isLogged && <div>Hello, User1</div>}
        </div>
    );
};