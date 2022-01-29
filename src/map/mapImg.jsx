import { useState } from "react"
import map from "../assets/img/map1.jpg"
import { dataMap, checkMap } from "./dataMap"
import './styleMap.css'
function MapImg() {
    const [visibility, setVisibility] = useState({ dataMap, visi: null })
    const hanldeMouseOver = (id) => {
         setVisibility({visi:id})
        console.log(id)
    }
    const hanldeMouseOut = (id) => {
        setVisibility({ visi: null })
    }
    


    return (
        <div className="map">
            <div className="map__img">
                <img src={map} />
            </div>
            <div className="map__children">


                {dataMap.map(map => {
                    return (
                        <div className="checkMap" key={map.id}>

                            <div className={`checkMap__Content--hiden checkMap__content${map.id} ${map.id === visibility.visi ? "show" : null}`}>
                                <h1>{map.title}</h1>
                                <p>{map.slogan}</p>
                                <h2>{map.text}</h2>
                            </div>

                            <div className="checkMap__Check">
                                <span
                                    className={`check${map.id}`}
                                    onMouseOver={() => hanldeMouseOver(map.id)}
                                    onMouseOut={ () => hanldeMouseOut(map.id)}
                                // onClick={ hanldeMouseOver }
                                >{checkMap.check}</span>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default MapImg