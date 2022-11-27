import './searchItem.css'
import {Link} from 'react-router-dom'
function SearchItem({item,dispatch,destination,option,date}){
  const handleClick =()=>{
    dispatch({type:"NEW_SEARCH",payload:{destination,date,option}})
  }
    return(
    <div className="search_Item">
       <img src={item.photos[0]} />
       <div className="search_Item_Desc">
           <h1 className="search_Item_Title">{item.name}</h1>
           <span className="search_Item_Distance">{item.distance}</span>
           <span className="search_Item_TaxiOp">Free airport taxi</span>
           <span className="search_Item_Subtitle">
               Studio Apartment with Air conditioning
           </span>
            <span className="search_Item_Features">
            {item.desc}
            </span>
            <span className="search_Item_CancelOp">Free cancellation </span>
            <span className="search_Item_CancelOpSubtitle">
             You can cancel later, so lock in this great price today!
            </span>
       </div>
       <div className="search_Item_Details">
         <div className="search_Item_Rating">
            <span>Excellent</span>
            <button>8.9</button>
         </div>
        <div className="search_Item_DetailTexts">
          <span className="search_Item_Price">{item.cheapestPrice}</span>
          <span className="search_Item_TaxOp">Includes taxes and fees</span>
          <Link to={`/booking-ui/hotels/${item._id}`}>
              <button onClick={handleClick} className="search_Item_CheckButton">See availability</button>   
          </Link>
        </div>
      </div>
    </div>
    )
}
export default SearchItem