import { useState  ,useEffect} from "react"

import { listImg } from "./dataSlide"
import './slideAuto.css'

function SlideAuto(){
    const [slide ,setSlide] =  useState(0)
   
    useEffect(()=>{
       const timer = setTimeout(() =>{
            setSlide( prev =>  (prev === listImg.length -1 ? 0 : prev+1))
        },2000)

        return () => clearTimeout(timer)
    },[slide])
    
    return(
        <div className="slideAuto">
            <div className="slideAuto__img">
            <img 
            src={listImg[slide].src}
            className="slideAuto__img--auto"
            />
            </div>
            <div className={listImg[slide].className}>
                <h1>{listImg[slide].h1}</h1>
                <h3>{listImg[slide].h3}</h3>
            </div>
        </div>
        
    )
} 

export default SlideAuto