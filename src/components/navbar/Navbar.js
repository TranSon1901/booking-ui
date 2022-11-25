import "./navbar.css"
import { Link } from "react-router-dom"
function NavBar(){
    return(
        <div className="navbar">
            <div className="navContainer">
                <Link to="/booking-ui/">
                    <h2 className="logo">LamaBooking</h2>
                </Link>
                 <div className="navItems">
                     <button className="navButton">Login</button>
                     <button className="navButton">Register</button>
                 </div>
            </div>
        </div>
    )
}
export default NavBar