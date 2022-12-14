import { useLocation } from "react-router-dom"
import Header from "../../components/Header/Header"
import NavBar from "../../components/navbar/Navbar"
import { useState,useContext } from "react"
import { format } from 'date-fns'
import { DateRange } from 'react-date-range';
import './listhotel.css'
import SearchItem from "../../components/searchItem/SearchItem"
import UseFetch from "../../hooks/UseFetch"
import { SearchContext } from "../../context/SearchContext"

function ListHotel(){
    const localtion=useLocation()
    const [openDate,setOpenDate]=useState(false)
    const [destination,setDestinaton]=useState(localtion.state.destination)
    const [date, setDates] = useState(localtion.state.date)
    const [option,setOption]=useState(localtion.state.option)
    const [min,setMin]=useState(undefined)
    const [max,setMax]=useState(undefined)

    const {dispatch} =useContext(SearchContext)
    const {data, loading, erorr ,reFetch} = 
       UseFetch(`/hotels?city=${destination}&min=${min||0}&max=${max||999}`)

    const hanldeSearch=()=>{
        reFetch()
        dispatch({type:"NEW_SEARCH",payload:{destination,date,option}})
    }
    const hanldeOption=(name,e)=>{
        setOption(prev=>({
            ...prev,
            [name]: Number(e.target.value)
        }))
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
                        <input type="text" placeholder={destination}
                        onChange={(e)=>setDestinaton(e.target.value)}
                        />
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
                        onChange={item =>setDates([item.selection])}
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
                            <input type="number" min={1} 
                            className="ls_option_input"
                            onChange={(e)=>hanldeOption("adult",e)}
                            placeholder={option.adult}/>
                        </div>
                        <div className="ls_options_item">
                            <span className="ls_options_text">
                                Children
                            </span>
                            <input type="number" min={0} 
                            onChange={(e)=>hanldeOption("chilren",e)}
                            className="ls_option_input"
                            placeholder={option.children}/>
                        </div>
                        <div className="ls_options_item">
                            <span className="ls_options_text">
                                Room 
                            </span>
                            <input type="number" min={1} 
                            onChange={(e)=>hanldeOption("room",e)}
                            className="ls_option_input"
                            placeholder={option.room}/>
                        </div>
                    </div>
                    <button onClick={hanldeSearch} className="listHotel_Search_btn">Search</button>
                </div>
                <div className="listHotel_Result">
                   { loading ? ('loading await please'):
                     data.map(item=>(<SearchItem 
                        item={item} 
                        key={item._id} 
                        dispatch={dispatch}
                        destination={destination}
                        option={option}
                        date={date}/>))
                   }
                </div>
            </div>
        </div>
      </div>
    )
}
export default ListHotel