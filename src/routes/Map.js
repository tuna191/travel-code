import { Outlet } from "react-router-dom"
import MapImg from "../map/mapImg.jsx"
import Footer from "../footer/footer"
function Map(){
    return(
        <>
        <MapImg/>
        <Footer/>
        <Outlet/>
        </>
    )
}

export default Map