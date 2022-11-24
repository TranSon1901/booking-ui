import Header from "../../components/Header/Header"
import NavBar from "../../components/navbar/Navbar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCircleArrowLeft, faCircleArrowRight,  faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import './hotel.css'
import { useState } from "react"
import UseFetch from "../../hooks/UseFetch"
import { useLocation } from "react-router-dom"
function Hotel(){
    const location = useLocation()
    const path= location.pathname.split("/")
    const id = path.splice(3).toString()
    const [sliderNumber,setSliderNumber]=useState()
    const [open,setOpen]=useState()
    
    const {data, loading, erorr ,reFetch} = 
       UseFetch(`/api/hotels/find/${id}`)
    const handleOpen=(i)=>{
       console.log(i)
        setSliderNumber(i)
        setOpen(true)
    }
    const handleMove = (direction) => {
        let newSliderNumber;
    
        if (direction === "l") {
          newSliderNumber = sliderNumber === 0 ? 5: sliderNumber - 1;
        } else {
          newSliderNumber = sliderNumber === 5 ? 0 : sliderNumber + 1;
        }
        setSliderNumber(newSliderNumber)
      };

    // const photos = [
    //     {
    //       src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    //     },
    //     {
    //       src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    //     },
    //     {
    //       src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    //     },
    //     {
    //       src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    //     },
    //     {
    //       src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    //     },
    //     {
    //       src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    //     },
    //   ];
    return(
        <>
          <NavBar />
          <Header type="listHotel"/>
         {loading ? ('loading await please') :
         <div className="hotel_container">
            {open && 
            <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={()=>setOpen(!open)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={()=>handleMove("l")}
            />
             <div className="sliderWrapper">
              <img src={data.photos[sliderNumber]} alt="" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={()=>handleMove("r")}
            />
            </div>}
               <div className="hotel_wrapper">
                    <button className="bookNow">Reserve or Book Now!</button>
                    <h1 className="hotel_title">{data.name}</h1>
                    <div className="hotel_address">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>{data.address}</span>
                    </div>
                    <span className="hotel_Distance">
                        Excellent location – {data.distance}m from center
                    </span>
                    <span className="hotel_PriceHighlight">
                        Book a stay over ${data.cheapestPrice} at this property and get a free airport taxi
                    </span>
                    <div className="hotel_image">
                        { data.photos ? 
                            data.photos.map((photo,i)=>(
                                <div key={i} className="photo_image_wrapper">
                                     <img src={photo} onClick={()=>handleOpen(i)}/>
                                </div>
                            )) :"Loading"
                        }
                    </div>
                    <div className="hotel_details">
                         <div className="hotel_details_Text">
                         <h1 className="hotel_Title">{data.title}</h1>
                            <p className="hotel_Desc">
                              {data.desc}
                            </p>
                         </div>
                         <div className="hotel_details_Price">
                              <h1>Perfect for a 9-night stay!</h1>
                              <span>
                                  Located in the real heart of Krakow, this property has an
                                  excellent location score of 9.8!
                              </span>
                              <h2>
                                <b>$945</b> (9 nights)
                              </h2>
                              <button>Reserve or Book Now!</button>
                         </div>
                    </div>
               </div>
          </div>
          }
        </>
    )
}
export default Hotel