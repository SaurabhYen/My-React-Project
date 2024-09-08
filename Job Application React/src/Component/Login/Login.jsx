import "./Login.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie"
import { useEffect } from "react"
export default function Login(){

       const [allValues,setAllValues]=useState({
        username:'',
        password:'',
        showErrmsg:false,
        errMsg:''
       })

       let navigate=useNavigate();
       let token=Cookies.get("jwtToken")

       
       const onHandleSubmitDetail=async(e)=>{
             e.preventDefault();
             console.log(allValues)

             let userDetail={
                username:allValues.username,
                password:allValues.password
             }

             let option={
                method:"Post",
                body:JSON.stringify(userDetail)
             }
            const Api="https://apis.ccbp.in/login";

            let response=await fetch(Api,option)
            let data=await response.json();
            console.log(data)
            if(response.ok===true){
                  navigate('/')
                  Cookies.set("jwtToken",data.jwt_token)
             
            }else{
                setAllValues({...allValues,errMsg:data.error_msg})
            }
            
            

       }
    
       useEffect(()=>{
        if(token !== undefined){
            navigate('/')
        }
       },[])





    return (
        <div className="form-cont">

            <form className="my-form" onSubmit={onHandleSubmitDetail}>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">username</label>
                    <input type="text" onChange={(e)=>{setAllValues({...allValues,username:e.target.value})}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password"  onChange={(e)=>{setAllValues({...allValues,password:e.target.value})}} className="form-control" id="exampleInputPassword1"/>
                </div>
                <p>{allValues.errMsg}</p>
                <button type="submit" className="btn btn-primary submitBtn">Login</button>
              
            </form>

        </div>
    )
}