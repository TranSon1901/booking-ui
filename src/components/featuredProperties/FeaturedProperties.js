import './featuredProperties.css'
import UseFetch from '../../hooks/UseFetch'
function FeaturedProperties(){
   const {data,loading, erorr} = UseFetch("/hotels?featured=true&limit=4") 
   return(
      <div className='fp'>
         {loading ? ('loading please await'):
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
      </div>  
    )
}
export default FeaturedProperties