import Footer from "../footer/footer"
import { Outlet } from "react-router-dom"
import ContactContent from "../Contact/ContactContent" 
function Contact(){
    return(
        <>
        <ContactContent/>
        <Footer/>
        <Outlet/>
        </>
    )
}

export default Contact