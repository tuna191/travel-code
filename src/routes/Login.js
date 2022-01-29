import LoginContent from "../LoginContent/LoginContent"
import { Link ,useNavigate } from "react-router-dom";
import App from "../App"
import {useState ,useEffect} from "react";
function Login(){
    const adminUser ={
        email:"admin@admin.com",
        password:"admin123"
    }
    const [user, setUser] = useState({name:"",email:""});
    const [error, setError] = useState("");

    let navigate = useNavigate();
    const Login = detail =>{
        console.log(detail)
        if(detail.email === adminUser.email && detail.password === adminUser.password){
            console.log("Login")
            setUser({
                name:detail.name,
                email:detail.email
            });
        }else{
            console.log("Details do not match!");
            setError("Details do not match!")
        }
    }

    const Logout = () =>{
        console.log("Logout")
    }

    return(
        <>
        
        {(user.email != "") ? (
           ""
        ):(
            <LoginContent Login={Login} error={error}/>
        )}
        </>
    )
}
export default Login