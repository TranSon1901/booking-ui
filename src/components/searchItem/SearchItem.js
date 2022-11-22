import './searchItem.css'
function SearchItem(){
    return(
    <div className="search_Item">
       <img src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1" />
       <div className="search_Item_Desc">
           <h1 className="search_Item_Title">Tower Street Apartments</h1>
           <span className="search_Item_Distance">500m from center</span>
           <span className="search_Item_TaxiOp">Free airport taxi</span>
           <span className="search_Item_Subtitle">
               Studio Apartment with Air conditioning
           </span>
            <span className="search_Item_Features">
            Entire studio • 1 bathroom • 21m² 1 full bed
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
          <span className="search_Item_Price">$112</span>
          <span className="search_Item_TaxOp">Includes taxes and fees</span>
          <button className="search_Item_CheckButton">See availability</button>
        </div>
      </div>
    </div>
    )
}
export default SearchItem