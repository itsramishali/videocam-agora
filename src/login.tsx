import React, { useState } from 'react';
import { signInWithEmailAndPassword, registerWithEmailAndPassword } from './auth';
import './login.css'; // Import the CSS file

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            setError('');
            await signInWithEmailAndPassword(email, password);
            // Handle successful login
        } catch (error) {
            setError((error as Error).message);
            // Handle login error
        }
    };

    // const handleRegister = async () => {
    //     try {
    //         setError('');
    //         await registerWithEmailAndPassword(email, password); // Removed the second argument

    //         // If registration is successful, handle it accordingly
    //     } catch (error) {
    //         setError((error as Error).message);
    //         // Handle registration error
    //     }
    // };
    const handleRegister = async () => {
        try {
            setError('');
            await registerWithEmailAndPassword(email,); // Pass email and password as separate arguments
    
            // If registration is successful, handle it accordingly
        } catch (error) {
            setError((error as Error).message);
            // Handle registration error
        }
    };
    
    return (
        <div>
            <header className="header">
                <img className='logo-img' src="/src/assets/Final Logo 4.png" alt="" />
                <h1 className='head-ing'>CamRa</h1>
            </header>
            <div className="login-container">
                <form className="login-form">
                    <label htmlFor="email">Username/Email:</label>
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="button" onClick={handleLogin}>Login</button>
                    <button type="button" onClick={handleRegister}>Register</button>
                </form>

                {error && <p className="error-message">{error}</p>}
            </div>
        </div>
    );
};

export default LoginPage;

