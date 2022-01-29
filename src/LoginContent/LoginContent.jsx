import { useState } from "react"
import { Link } from "react-router-dom"
import { dataLogin } from "./dataLogin"
import "./styleLogin.css"
import {close} from "../icon/icon"
function LoginContent({Login ,error}) {
    const [details, setDetails] = useState({name:"",email:"",password:""});

    const submitHandle = e =>{
        e.preventDefault();

        Login(details)
    }
    return (
        <form onSubmit={submitHandle}>
            <div className="loginContent">

                <div className="loginContent--midle">
                    <Link to="/" className="close">{close}</Link>
                    <h1>{dataLogin.title}</h1>
                    {(error != "") ? (<div className="error">{error}</div>) :"" }
                    <div className="midle__children">
                        <div className="midle__children__input">
                            <label htmlFor="acc">{dataLogin.text1}</label>
                            <input 
                            type="text" 
                            
                            id="acc"
                            onChange={e => setDetails({...details , name:e.target.value})}
                            value={details.name}
                            />
                        </div>
                        <div className="midle__children__input">
                            <label htmlFor="email">{dataLogin.text3}</label>
                            <input type="email" id="email"
                             onChange={e => setDetails({...details , email:e.target.value})}
                             value={details.email}
                            />
                        </div>
                        <div className="midle__children__input">
                            <label htmlFor="pass">{dataLogin.text2}</label>
                            <input type="password" id="pass" 
                             onChange={e => setDetails({...details , password:e.target.value})}
                             value={details.password}
                            />
                        </div>
                        <input type="submit" value={dataLogin.btn} className="submit"/>
                        
                    </div>

                </div>
            </div>
        </form>
    )
}

export default LoginContent