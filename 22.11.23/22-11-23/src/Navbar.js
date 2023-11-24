import { Link, useNavigate } from "react-router-dom";
import logo from './digital-lync.png';

function Navbar() {
    const navigate = useNavigate();

    const navToEmployees = () => {
        navigate('/employees');
    };
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
                    </ul>
                    <ul className="d-flex navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={"/register"}>Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/login'}>Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;