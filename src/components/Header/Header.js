import { faBed ,faPlane,faTaxi,faCar,faCalendarDays,faPerson} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './header.css'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns'
import { useState } from 'react';
function Header(){
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
        children:2,
        room:1
      })
      const handleOpenDate=()=>{
        setOpenDate(!opendate)
      }

    return(
        <div className="header">
            <div className='header_container'>
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
                <h1 className='header_title'>  A lifetime of discounts? It's Genius.</h1>
                <p className="header_desc">Get rewarded for your travels – unlock instant savings of 10% or
                 more with a free Lamabooking account
                 </p>
                 <button className="headerBtn">Sign in / Register</button>
                 <div className='header_search'>
                    <div className='header_searchItem'>
                       <FontAwesomeIcon icon={faBed} className="header_icon"/>
                       <input 
                        type="text"
                        placeholder="where are you going ?"
                        className='header_searchInput'
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
                         onChange={item => setDate([item.selection])}
                         moveRangeOnFirstSelection={false}
                         ranges={date}
                        className="date"
                       />
                      }
                    </div>
                    <div className='header_searchItem'>
                       <FontAwesomeIcon icon={faPerson} className="header_icon"/>
                       <span className='header_searchText'>
                        {option.adult} adult 
                        {option.children} children 
                        {option.room} room</span>
                    </div>
                    <div className='header_searchItem'>
                       <button className='headerBtn'>Search</button>
                    </div>    
                </div>
            </div>
        </div>
    )
}
export default Header