import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import NavBar from "../components/navbar/Navbar"
import Router from "../routes/Routers"

function Layout(){
    return(
      <>
        <NavBar />
        <Header />
        <Router />
        <Footer />
      </>
    )
}
export default Layout