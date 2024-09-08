import "./Header.css"
import { Link  } from "react-router-dom"
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom"

export default function Header(){
    let token=Cookies.get("jwtToken")
    let navigate= useNavigate()
    let onLogout=()=>{
       Cookies.remove("jwtToken")
       navigate('/login')
        
    }
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

            <button type="button" className="btn btn-primary logoutBtn" onClick={onLogout}>Logout</button>

        </nav>
    )
}