import "./navbar.css"
function NavBar(){
    return(
        <div className="navbar">
            <div className="navContainer">
                 <h2 className="logo">LamaBooking</h2>
                 <div className="navItems">
                     <button className="navButton">Login</button>
                     <button className="navButton">Register</button>
                 </div>
            </div>
        </div>
    )
}
export default NavBar