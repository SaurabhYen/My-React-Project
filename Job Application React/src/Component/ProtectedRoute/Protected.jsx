import Cookies from "js-cookie"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Protected(prop){
    let {Component}=prop;
    let token=Cookies.get("jwtToken");
    let navigate=useNavigate();
    useEffect(()=>{
       if(token===undefined){
        navigate("/login")
       }
    },[])
    return (
        <>
          
            {Component}
        </>
    )
}