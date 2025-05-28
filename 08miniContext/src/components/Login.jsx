import { useState, useContext } from "react"
import React from 'react'
import UserContext from "../context/UserContext"

function Login() {

    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');

    const {setUser} = useContext(UserContext);

    const handleSubmit = (event) => {
        event.preventDefault()
        setUser({Username, Password})
    }

  return (
    <div>
        <h2>Login</h2>


        <input type="text"
        value={Username}
        onChange={(event) => setUsername(event.target.value)}
        placeholder="username"/>

        <input type="text" 
        value={Password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="password"/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login