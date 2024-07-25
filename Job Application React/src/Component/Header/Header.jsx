import "./Header.css"
import { Link } from "react-router-dom"

export default function Header(){
    return (
        <nav className="my-nav">
            <Link  to='/'>
                <img src="https://assets.ccbp.in/frontend/react-js/logo-img.png " alt="web_Logo" className="web_Logo"/>
            </Link>

            <ul className="my-ul-listItem">
                <li className="my-list">
                    <Link to='/' >Home</Link>
                </li>
                <li className="my-list">
                    <Link to='/job'>Jobs</Link>
                </li>
            </ul>

            <button type="button" className="btn btn-primary">Logout</button>

        </nav>
    )
}