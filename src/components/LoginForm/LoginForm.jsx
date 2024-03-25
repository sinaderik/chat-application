import React, { useState } from 'react'
import axios from 'axios'

export default function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")

    function handleSubmit() {

    }

    return (
        <div className='wrapper'>
            <div className='form'>
                <h1>Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        className='input'
                        required
                        type='text'
                        value={username}
                        placeholder='Username'
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        className='input'
                        required
                        type='password'
                        value={password}
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div align='center'>
                        <button className='button' type='submit'>
                            <span>Login</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
