import { Link, useNavigate } from "react-router-dom";
import logo from './digital-lync.png';
import { useEffect, useState } from 'react';
import { jwtDecode } from "jwt-decode";
import MessageService from './MessageService';

function Navbar() {
    const navigate = useNavigate();

    const navToEmployees = () => {
        navigate('/employees');
    };
    const [sessionTimeLeft, setSessionTimeLeft] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            setIsLoggedIn(true);
            setInterval(() => {
                let userInfo = localStorage.getItem('user-info');
                let token = JSON.parse(userInfo).token;
                let decodedToken = jwtDecode(token);
                let currentDate = new Date();
                const timeDiffMillis = decodedToken.exp * 1000 - currentDate.getTime();
                // Convert milliseconds to seconds
                const seconds = Math.floor(timeDiffMillis / 1000);
                // Calculate minutes and remaining seconds
                const minutes = Math.floor(seconds / 60);
                const remainingSeconds = seconds % 60;
                // Format the result as "mm:ss"
                const formattedTime = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
                setSessionTimeLeft(formattedTime);
                // JWT exp is in seconds
                if (decodedToken.exp * 1000 === currentDate.getTime()) {
                    alert('Session expired, please login');
                    setSessionTimeLeft('');
                    navigate('/login');
                }
            }, 1000);
        }
        MessageService.getMessage().subscribe(data => {
            if (data) {
                setIsLoggedIn(data);
            }
        });
    }, []);
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand"><img src={logo} width="180px" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/todo-app'}>Todo App</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/users"}>Users</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={navToEmployees}>Employees</a>
                        </li>

                        {sessionTimeLeft && <h5>Session Time Left: {sessionTimeLeft}</h5>}
                    </ul>
                    <ul className="d-flex navbar-nav">
                        {isLoggedIn ? (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to={"/profile"}>Profile</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={'/login'}>Logout</Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to={"/register"}>Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={'/login'}>Login</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;