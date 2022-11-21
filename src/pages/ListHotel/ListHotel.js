import Header from "../../components/Header/Header"
import NavBar from "../../components/navbar/Navbar"
import './listhotel.css'
function ListHotel(){
    return(
      <div>
        <NavBar />
        <Header type="listHotel"/>
        <div className="listHotel_container">
            <div className="listHotel_wrapper">
                <div className="listHotel_Search">
                    <h1 className="ls_title">Search</h1>
                    <div className="ls_Item">
                        <label>Destination</label>
                        <input type="text"/>
                    </div>
                    <div className="ls_Item">
                        <label>Check-in date</label>
                        <input type="text"/>
                    </div>
                </div>
                <div className="listHotel_Result">

                </div>
            </div>
        </div>
      </div>
    )
}
export default ListHotel