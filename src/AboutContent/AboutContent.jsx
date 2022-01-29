import {dataAboutContent} from "./dataAboutContent"
import './styleAboutContent.css'

function Content(){
    return(
        <div className="aboutContent">
            <div className={dataAboutContent[0].className}>
            <div className="aboutContent__children right">
                <h2>{dataAboutContent[0].title}</h2>
                <p>{dataAboutContent[0].dec1}</p>
                <p>{dataAboutContent[0].dec2}</p>
            </div>
            <div className="aboutContent__img">
                <img src ={dataAboutContent[0].src}/>
            </div>
            </div>
            <div className={dataAboutContent[1].className}>
            <div className="aboutContent__img">
                <img src ={dataAboutContent[1].src}/>
            </div>
            <div className="aboutContent__children left">
                <h2>{dataAboutContent[1].title}</h2>
                <p>{dataAboutContent[1].dec1}</p>
                <p>{dataAboutContent[1].dec2}</p>
                <p>{dataAboutContent[1].dec3}</p>
            </div>
            
            </div>
            <div className={dataAboutContent[2].className}>
            <div className="aboutContent__children right">
                <h2>{dataAboutContent[2].title}</h2>
                <p>{dataAboutContent[2].dec1}</p>
                <p>{dataAboutContent[2].dec2}</p>
            </div>
            <div className="aboutContent__img">
                <img src ={dataAboutContent[2].src}/>
            </div>
            </div>
        </div>
    )
}
export default Content