import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar({ onLogout }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        onLogout(); 
        navigate('/');
    };

    return (
        <nav className="navbar">
            <h1>Travel Application</h1>
            <ul>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li>
                    <button onClick={handleLogout}>Logout</button>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
