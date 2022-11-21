import Featured from "../../components/featured/Featured"
import Header from "../../components/Header/Header"
import NavBar from "../../components/navbar/Navbar"
import './home.css'
function Home(){
    return(
        <>
         <NavBar />
         <Header />
         <div className="homeContainer">
            <Featured />
         </div>
        </>
    )
}
export default Home