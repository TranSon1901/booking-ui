import { Routes,Route} from 'react-router-dom'
import Home from '../pages/Home/Home'
import Hotel from '../pages/Hotel/Hotel'
import ListHotel from '../pages/ListHotel/ListHotel'

const Router=()=>{
    return(
       <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/hotels' element={<ListHotel />}/>
          <Route path='/hotels/:id' element={<Hotel />}/>
       </Routes>
    )
}
export default Router