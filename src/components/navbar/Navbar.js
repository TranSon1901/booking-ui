import "./navbar.css"
import { Link } from "react-router-dom"
import {useContext} from 'react'
import { AuthContext } from "../../context/AuthContext"
function NavBar(){
    const {user} = useContext(AuthContext)
    return(
        <div className="navbar">
            <div className="navContainer">
                <Link to="/booking-ui/">
                    <h2 className="logo">LamaBooking</h2>
                </Link>
                 { user ? (<h2>{user.username}</h2>):
                 <div className="navItems">
                    <Link to="/booking-ui/login">
                        <button className="navButton">Login</button>
                    </Link> 
                     <button className="navButton">Register</button>
                 </div>     
                 }
            </div>
        </div>
    )
}
export default NavBar