import React, { useState } from "react";

/*
Create login form with userName and password.
Create function login with onClick - Button.
If user enters userName = 'user1' and pass = 'user1pass'
the form hides itself and displays 'Welcome, User1!'
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

    function login(){
        if(formData.username == 'user1' && formData.password == 'user1pass'){
            setIsLogged(true);
        }
    }

    return (
        <div style={{ marginTop: '20px' }}>
            <h1>Login Form Lv2</h1>
            <div>
                {JSON.stringify(formData)}
            </div>
            {!isLogged &&
                <div>
                    <div>
                        <label>Username</label>
                        <input type="text"
                            name="username"
                            onInput={handleInput}
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password"
                            name="password"
                            onInput={handleInput}
                        />
                    </div>
                    <div>
                        <button onClick={login} type="button">Login</button>
                    </div>
                </div>
            }
            {isLogged && <div>Hello, User1</div>}
        </div>
    );
};