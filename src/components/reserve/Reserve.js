import './reserve.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import UseFetch from '../../hooks/UseFetch';
import {useState} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import {useContext} from 'react'
function Reserve ({ setOpen, hotelId }){
    const [selectedRooms, setSelectedRooms] = useState([]);
    const {data,loading, erorr} = UseFetch(`/hotels/room/${hotelId}`)
    const { date } = useContext(SearchContext);

    const navigate = useNavigate();

    const getDatesInRange = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
    
        const date = new Date(start.getTime());
    
        const dates = [];
    
        while (date <= end) {
          dates.push(new Date(date).getTime());
          date.setDate(date.getDate() + 1);
        }
    
        return dates;
      };
    
    const alldates = getDatesInRange(date[0].startDate, date[0].endDate);
   
    const isAvailable = (roomNumber) => {
      const isFound = roomNumber.unavailableDates.some((date) =>
        alldates.includes(new Date(date).getTime())
      );
      return !isFound;
    };
  
    const hanldeSelect=(e)=>{
        const checked = e.target.checked
        const value = e.target.value
       
        setSelectedRooms(checked ? 
            [...selectedRooms,value]:
            selectedRooms.filter((item) => item !== value))
        }
        const handleClick = async () => {
            try {
              await Promise.all(
                selectedRooms.map((roomId) => {
                  const res = axios.put(`/rooms/availability/${roomId}`, {
                    dates: alldates,
                  });
                  return res.data;
                })
              );
              setOpen(false);
              navigate("/booking-ui/");
            } catch (err) {}
          };
    return(
        <div className='reserve'>
            <div className='reserve_container'>
            <FontAwesomeIcon
             icon={faCircleXmark}
             className="reserve_Close"
             onClick={()=>setOpen(false)}
             />
            <span>Select your rooms:</span>
            {
                data.map(item=>(
                    <div className='reserve_item' key={item._id}>
                          <div className='reserve_item_info'>
                               <div className='reserve_title'>{item.title}</div>
                               <div className='reserve_des'>{item.desc}</div>
                               <div className='reserve_max'>Max People: {item.maxPeople}</div>
                               <div className="reserve_Price">{item.price}</div>
                          </div>
                     {
                        item.roomNumbers.map(roomNumber=>(
                            <div className='room_number' key={roomNumber._id}>
                                <label>{roomNumber.number}</label>
                                <input type="checkbox" value={roomNumber._id}
                                onChange={hanldeSelect}
                                disabled={!isAvailable(roomNumber)}
                                />
                            </div>
                        ))
                     } 
                    </div>
                ))
            }
            <button onClick={handleClick} className="rButton">
              Reserve Now!
             </button>
            </div>
        </div>
    )
}
export default Reserve