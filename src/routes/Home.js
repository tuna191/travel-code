import { Outlet } from "react-router-dom"
import SlideAuto from "../slideAuto/slideAuto"
import HomeListDanhLam from "../HomeListDanhLam/HomeListDanhLam"
import ListAmThuc from "../HomeListAmThuc/amThuc"
import RecommentHotel from "../HomeHotel/HomeHotel"
import Footer from "../footer/footer"
function Home(){
    return(
        <>
        <SlideAuto/>
        <HomeListDanhLam/>
        <ListAmThuc/>
        <RecommentHotel/>
        <Footer/>
        <Outlet/>
        </>
    )
}

export default Home