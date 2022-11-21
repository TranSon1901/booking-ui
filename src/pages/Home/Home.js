import Featured from "../../components/featured/Featured"
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import MailList from "../../components/MailList/MailList"
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
            <h1 className="home_title">Homes guests love</h1>
            <FeaturedProperties />
            <MailList />
            <Footer />
         </div>
        </>
    )
}
export default Home