import './featuredProperties.css'
import UseFetch from '../../hooks/UseFetch'
function FeaturedProperties(){
   const {data,loading, erorr} = UseFetch("/api/hotels?featured=true&limit=4") 
   return(
      <div className='fp'>
         {loading ? ('loading'):
         <>
           {
            data.map(item=>(
               <div className='fp_Item' key={item._id}>
                   <img src={item.photos[0]}/>
                   <span className='fp_Name'>{item.name}</span>
                   <span className='fp_City'>{item.city}</span>
                   <span className='fp_Price'>Starting from ${item.cheapestPrice}
                   </span>
                   <div className='fp_Rating'>
                       <button>8.9</button>
                       <span>Excellent</span>
                   </div> 
               </div>
            ))
           }
         </>}
       {/* <div className='fp_Item'>
            <img src='https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1'/>
            <span className='fp_Name'>Comfort Suites Airport</span>
            <span className='fp_City'>Austin</span>
            <span className='fp_Price'>Starting from $140</span>
           <div className='fp_Rating'>
              <button>9.3</button>
              <span>Excellent</span>
           </div> 
       </div>
       <div className='fp_Item'>
            <img src='https://cf.bstatic.com/xdata/images/hotel/max1280x900/232902339.jpg?k=3947def526b8af0429568b44f9716e79667d640842c48de5e66fd2a8b776accd&o=&hp=1'/>
            <span className='fp_Name'>Four Seasons Hotel</span>
            <span className='fp_City'>Lisbon</span>
            <span className='fp_Price'>Starting from $99</span>
           <div className='fp_Rating'>
              <button>8.9</button>
              <span>Excellent</span>
           </div> 
       </div>
       <div className='fp_Item'>
            <img src='https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1'/>
            <span className='fp_Name'>Hilton Garden Inn</span>
            <span className='fp_City'>Berlin</span>
            <span className='fp_Price'>Starting from $122</span>
           <div className='fp_Rating'>
              <button>8.9</button>
              <span>Excellent</span>
           </div> 
       </div> */}
      </div>  
    )
}
export default FeaturedProperties