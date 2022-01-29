import {dataAboutHead }from "./dataAboutHead"
import './styleAboutHead.css'

function Head(){
     return(
         <div className='aboutHead'>
             <div className="aboutHead__img">
                <img src ={dataAboutHead[0].src}/>
             </div>
             <div className="aboutHead__text">
                 <h1>{dataAboutHead[0].title}</h1>
             </div>
         </div>
     )
}

export default Head