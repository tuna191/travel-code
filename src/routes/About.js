import { Outlet } from "react-router-dom"
import Head from "../AboutHead/AboutHead"
import Content from "../AboutContent/AboutContent"
import Footer from "../footer/footer"
function About(){
    return(
        <>
        <Head/>
        <Content/>
        <Footer/>
        <Outlet/>
        </>
    )
}

export default About