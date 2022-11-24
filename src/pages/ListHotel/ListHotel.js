import { useLocation } from "react-router-dom"
import Header from "../../components/Header/Header"
import NavBar from "../../components/navbar/Navbar"
import { useState } from "react"
import { format } from 'date-fns'
import { DateRange } from 'react-date-range';
import './listhotel.css'
import SearchItem from "../../components/searchItem/SearchItem"
import UseFetch from "../../hooks/UseFetch"
function ListHotel(){
    const localtion=useLocation()
    const [openDate,setOpenDate]=useState(false)
    const [destination,setDestinaton]=useState(localtion.state.destination)
    const [date, setDate] = useState(localtion.state.date)
    const [option,setOption]=useState(localtion.state.option)
    const [min,setMin]=useState(undefined)
    const [max,setMax]=useState(undefined)

    
    const {data, loading, erorr ,reFetch} = 
       UseFetch(`/api/hotels?city=${destination}&min=${min||0}&max=${max||999}`)
    console.log(data)

    const hanldeSearch=()=>{
        console.log(1)
        reFetch()
    }
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
                        <input type="text" value={destination}/>
                    </div>
                    <div className="ls_Item">
                        <label>Check-in date</label>
                        <span className="day"
                        onClick={()=>setOpenDate(!openDate)}>
                        {`${format(date[0].startDate,"MM/dd/yyyy")} 
                        to ${format(date[0].endDate,"MM/dd/yyyy")}`}
                        </span>
                    </div>
                   {openDate && <DateRange
                        editableDateInputs={true}
                        minDate={new Date()}
                        ranges={date}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                    />}
                    <div className="ls_Item">
                        <label>Options</label>
                        <div className="ls_options_item">
                            <span className="ls_options_text">
                                Min price <small>per night</small>
                            </span>
                            <input type="number" 
                            className="ls_option_input" 
                            onChange={e=>setMin(e.target.value)}/>
                        </div>
                        <div className="ls_options_item">
                            <span className="ls_options_text">
                                Max price <small>per night</small>
                            </span>
                            <input type="number"
                            className="ls_option_input" 
                            onChange={e=>setMax(e.target.value)}/>
                        </div>
                        <div className="ls_options_item">
                            <span className="ls_options_text">
                                Adult 
                            </span>
                            <input type="number" min={1} className="ls_option_input"
                            placeholder={option.adult}/>
                        </div>
                        <div className="ls_options_item">
                            <span className="ls_options_text">
                                Children
                            </span>
                            <input type="number" min={0} className="ls_option_input"
                            placeholder={option.children}/>
                        </div>
                        <div className="ls_options_item">
                            <span className="ls_options_text">
                                Room 
                            </span>
                            <input type="number" min={1} className="ls_option_input"
                            placeholder={option.room}/>
                        </div>
                    </div>
                    <button onClick={hanldeSearch} className="listHotel_Search_btn">Search</button>
                </div>
                <div className="listHotel_Result">
                   { loading ? ('loading await please'):
                     data.map(item=>(<SearchItem item={item} key={item._id}/>))
                   }
                </div>
            </div>
        </div>
      </div>
    )
}
export default ListHotel