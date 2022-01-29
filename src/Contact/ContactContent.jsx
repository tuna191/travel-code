import {dataContact} from "./dataContact"
import './styleContact.css'
function ContactContent (){
    return(
        <div className="contact">
            <h1>{dataContact.title}</h1>
            <h3>{dataContact.slogan}</h3>
            <div className="contact__icon">
                <div className="contact__icon_children">
                    <span>{dataContact.iconAdress}</span>
                    <h4>{dataContact.textAdress}</h4>
                </div>
                <div className="contact__icon_children">
                    <span>{dataContact.iconPhone}</span>
                    <h4>{dataContact.textPhone}</h4>
                </div>
                <div className="contact__icon_children">
                    <span>{dataContact.iconEmail}</span>
                    <h4>{dataContact.textEmail}</h4>
                </div>
            </div>
            <input placeholder="Name..."/>
            <input placeholder="Email..."/>
            <input placeholder="Message..."/>
            <button >Send Message</button>
        </div>
    )
}
export default ContactContent