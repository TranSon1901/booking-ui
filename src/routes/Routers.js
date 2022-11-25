import { Routes,Route} from 'react-router-dom'
import Home from '../pages/Home/Home'
import Hotel from '../pages/Hotel/Hotel'
import ListHotel from '../pages/ListHotel/ListHotel'
import Login from '../pages/Login/Login'

const Router=()=>{
    return(
       <Routes>
          <Route path='/booking-ui/' element={<Home />}/>
          <Route path='/booking-ui/hotels' element={<ListHotel />}/>
          <Route path='/booking-ui/hotels/:id' element={<Hotel />}/>
          <Route path='/booking-ui/Login' element={<Login />}/>
       </Routes>
    )
}
export default Router