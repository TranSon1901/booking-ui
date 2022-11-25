import { useEffect, useState } from 'react'
import UseFetch from '../../hooks/UseFetch'
import './featured.css'
function Featured(){
     const {data,loading,erorr} = UseFetch("/hotels/countByCity?cities=berlin,madrid,london")
     return(
       <div className='featured'>
          { loading ? "loading please await":(<>  
           <div className='featured_Item'>
                <img src='https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o='/>
                <div className='featured_title'>
                     <h2>Berlin</h2>
                     <h3>{data[0]} properties</h3>
                </div>
           </div>
           <div className='featured_Item'>
                <img src='https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o='/>
                <div className='featured_title'>
                     <h2>Madrid</h2>
                     <h3>{data[1]} properties</h3>
                </div>
           </div>
           <div className='featured_Item'>
                <img src='https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o='/>
                <div className='featured_title'>
                     <h2>London</h2>
                     <h3>{data[2]} properties</h3>
                </div>
           </div>  
          </>)
          }  
       </div>
    )
}
export default Featured