import './reserve.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import UseFetch from '../../hooks/UseFetch';
import {useState} from "react"
function Reserve ({ setOpen, hotelId }){
    const [selectedRooms, setSelectedRooms] = useState([]);
    const {data,loading, erorr} = UseFetch(`/hotels/room/${hotelId}`)
    console.log(data)
    const hanldeSelect=(e)=>{
        const checked = e.target.checked
    }
    return(
        <div className='reserve'>
            <div className='reserve_container'>
            <FontAwesomeIcon
             icon={faCircleXmark} onClick={setOpen(false)}
             className="reserve_Close"
             />
            <span>Select your rooms:</span>
            {
                data.map(item=>(
                    <div className='reserve_item'>
                          <div className='reserve_item_info'>
                               <div className='reserve_title'>{item.title}</div>
                               <div className='reserve_des'>{item.desc}</div>
                               <div className='reserve_max'>Max People: {item.maxPeople}</div>
                          </div>
                     {
                        item.roomNumbers.map(roomNumber=>(
                            <div className='room_number'>
                                <label>{roomNumber.number}</label>
                                <input type="select" value={roomNumber._id}
                                onChange={(e)=>hanldeSelect}
                                />
                            </div>
                        ))
                     } 
                    </div>
                ))
            }
            </div>
        </div>
    )
}
export default Reserve