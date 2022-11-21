import Featured from "../../components/featured/Featured"
import Header from "../../components/Header/Header"
import NavBar from "../../components/navbar/Navbar"
import PropertyList from "../../components/propertyList/PropertyList"
import './home.css'
function Home(){
    return(
        <>
         <NavBar />
         <Header />
         <div className="homeContainer">
            <Featured />
            <h1 className="home_title">Browse by property type</h1>
            <PropertyList />
         </div>
        </>
    )
}
export default Home