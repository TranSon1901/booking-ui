import Header from "../../components/Header/Header"
import NavBar from "../../components/navbar/Navbar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCircleArrowLeft, faCircleArrowRight,  faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import './hotel.css'
import { useContext, useState } from "react"
import UseFetch from "../../hooks/UseFetch"
import { useLocation } from "react-router-dom"
import Footer from "../../components/Footer/Footer"
import { SearchContext } from "../../context/SearchContext"
function Hotel(){
    const location = useLocation()
    const path= location.pathname.split("/")
    const id = path.splice(3).toString()
    const [sliderNumber,setSliderNumber]=useState()
    const [open,setOpen]=useState()
    
    const {data, loading, erorr ,reFetch} = 
       UseFetch(`/hotels/find/${id}`)
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
    const {date ,option} =useContext(SearchContext)

    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    function dayDifference(date1, date2) {
      const timeDiff = Math.abs(date2.getTime() - date1.getTime());
      const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
      return diffDays;
    }
    const days = dayDifference(date[0].endDate, date[0].startDate);
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
                                <b>${days*data.cheapestPrice*option.room}</b> ({days} nights)
                              </h2>
                              <button>Reserve or Book Now!</button>
                         </div>
                    </div>
                    <Footer />
               </div>
          </div>
          }
        </>
    )
}
export default Hotel