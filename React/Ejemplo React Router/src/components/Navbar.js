import {NavLink} from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink exact to="/" className="nav-link" activeClassName="active">Inicio</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/dashboard" className="nav-link" activeClassName="active">Panel de control</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/record/" className="nav-link" activeClassName="active">Record</NavLink>
                </li>
            </ul>
        </nav>
    )
}
