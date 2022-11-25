import { faBed ,faPlane,faTaxi,faCar,faCalendarDays,faPerson} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './header.css'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns'
import { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { SearchContext } from '../../context/SearchContext';
import { AuthContext } from "../../context/AuthContext"
function Header({type}){
    const [destination,setDestinaton]=useState("")
    const [opendate,setOpenDate]=useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
      const [openOption,setOpenOption]=useState(false)
      const [option,setOption]=useState({
        adult:1,
        children:0,
        room:1
      })
      const handleOpenDate=()=>{
        setOpenDate(!opendate)
        setOpenOption(false)
      }
      const handleOption=(name,operation)=>{
         setOption(prev=>({
            ...prev,
            [name]: operation === "increase" ? option[name]+1:option[name]-1
         }))
      }
      const hanldeOpenOption=()=>{
        setOpenOption(!openOption)
        setOpenDate(false)
      }
      const {dispatch} = useContext(SearchContext)
      const {user} = useContext(AuthContext)

      const navigate = useNavigate();
      const hanldeSearch=() =>{
        dispatch({type:"NEW_SEARCH",payload:{destination,date,option}})
        navigate("/booking-ui/hotels", { state: { destination, date, option } })
      }
    return(
        <div className="header">
            <div className={type==='listHotel'? "header_container listMode":"header_container"}>
                <div className="header_list">
                     <div className="header_listItem active">
                         <FontAwesomeIcon icon={faBed} />
                         <span>Stays</span>
                     </div>
                     <div className="header_listItem">
                         <FontAwesomeIcon icon={faPlane} />
                         <span>Flights</span>
                     </div>
                     <div className="header_listItem">
                         <FontAwesomeIcon icon={faCar} />
                         <span>Car rentals</span>
                     </div>
                     <div className="header_listItem">
                         <FontAwesomeIcon icon={faBed} />
                         <span>Attractions</span>
                     </div>
                     <div className="header_listItem">
                         <FontAwesomeIcon icon={faTaxi} />
                         <span>Aiport taxis</span>
                     </div>
                </div>
                {type !=='listHotel' && 
                <>
                <h1 className='header_title'>  A lifetime of discounts? It's Genius.</h1>
                <p className="header_desc">Get rewarded for your travels – unlock instant savings of 10% or
                 more with a free Lamabooking account
                 </p>
                  {
                    !user && <button className="headerBtn">Sign in / Register</button>
                  }
                 <div className='header_search'>
                    <div className='header_searchItem'>
                       <FontAwesomeIcon icon={faBed} className="header_icon"/>
                       <input 
                        type="text"
                        placeholder="where are you going ?"
                        className='header_searchInput'
                        onChange={(e)=>setDestinaton(e.target.value)}
                       />
                    </div>
                    <div className='header_searchItem'>
                       <FontAwesomeIcon icon={faCalendarDays} className="header_icon"/>
                       <span onClick={handleOpenDate}
                       className='header_searchText'>
                        {`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}
                        `}</span>
                      {opendate &&
                       <DateRange
                        editableDateInputs={true}
                        minDate={new Date()}
                        ranges={date}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        className="date"
                       />
                      }
                    </div>
                    <div className='header_searchItem'>
                       <FontAwesomeIcon icon={faPerson} className="header_icon"/>
                       <span onClick={hanldeOpenOption}
                       className='header_searchText'>
                        {option.adult} Adult   
                        . {option.children} Children
                        . {option.room} Room
                        </span>
                        {openOption && <div className='header_options'>
                            <div className='option_Item'>
                                <span className="option_text">Adul</span>
                                <div className='option_counter'>
                                    <button disabled={option.adult <=1}
                                    className='optionCounterBtn'
                                    onClick={()=>{handleOption("adult","decrease")}}
                                    >-</button>
                                    <span className='option_Numer'>{option.adult}</span>
                                    <button className='optionCounterBtn'
                                    onClick={()=>{handleOption("adult","increase")}}
                                    >+</button>
                                </div>
                            </div>
                            <div className='option_Item'>
                                <span className="option_text">Children</span>
                                <div className='option_counter'>
                                    <button disabled={option.children <=0}
                                    className='optionCounterBtn'
                                    onClick={()=>{handleOption("children","decrease")}}
                                    >-</button>
                                    <span className='option_Numer'>{option.children}</span>
                                    <button className='optionCounterBtn'
                                    onClick={()=>{handleOption("children","increase")}}
                                    >+</button>
                                </div>
                            </div>
                            <div className='option_Item'>
                                <span className="option_text">Room</span>
                                <div className='option_counter'>
                                    <button disabled={option.room <=1}
                                    className='optionCounterBtn'
                                    onClick={()=>{handleOption("room","decrease")}}
                                    >-</button>
                                    <span className='option_Numer'>{option.room}</span>
                                    <button className='optionCounterBtn'
                                    onClick={()=>{handleOption("room","increase")}}
                                    >+</button>
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                    <div className='header_searchItem'>
                       <button 
                       onClick={hanldeSearch}
                       className='headerBtn'>Search</button>
                    </div>    
                </div>
                </>}
            </div>
        </div>
    )
}
export default Header