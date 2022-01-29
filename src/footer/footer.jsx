import {twitter,Facebook,Google,Envelope} from "../icon/icon"
import './styleFooter.css'
function Footer(){
    return(
        <div className="footer">
            <h1>Travel With Me</h1>
            <div className="footer__icon">
                <span>{twitter}</span>
                <span>{Facebook}</span>
                <span>{Google}</span>
                <span>{Envelope}</span>

            </div>
            <h3>-- Design By Tuna --</h3>
        </div>
    )
}
export default Footer