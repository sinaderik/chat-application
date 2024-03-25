import React, { useState } from 'react'
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault();

        const authObject = { 'Project-ID': "555fa585-9abf-433d-9a6b-77714d75f5c1", 'User-Name': username, 'User-Secret': password };
        try {
            setError("")
            setLoading(true)
            await axios.get("https://api.chatengine.io/chats", { headers: authObject })
            localStorage.setItem("username", username)
            localStorage.setItem("password", password)
            setLoading(false)
            window.location.reload();
        } catch {
            setLoading(false)
            setError("Opps, incorrect username or password")
        }
    }

    return (
        <div className='wrapper'>
            <div className='form'>
                <h1 style={{ color: "white", textAlign: "center", marginBottom: "1rem" }}>Chat Application</h1>
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
                            <span style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                Login
                                {loading
                                    ? <Box sx={{ display: 'flex', marginLeft: "0.5rem", fontSize: "20px" }}>
                                        <CircularProgress sx={{ fontSize: "20px" }} />
                                    </Box>
                                    : ""}
                            </span>
                        </button>
                    </div>
                    <h2 className='error'>{error}</h2>
                </form>
            </div>
        </div>
    )
}
