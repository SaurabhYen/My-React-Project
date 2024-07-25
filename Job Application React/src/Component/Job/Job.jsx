import { useEffect } from "react"
import Header from "../Header/Header"
import Cookies from "js-cookie"
import "./Job.css"
import { useState } from "react"
import DisplayJob from "../DisplayJobSec/DisplayJobdesc"
import FilterJob from "../FilterJobSec/FilterJob"




export default function Job(){
    let [allValues,setAllValues]=useState({
        jobDescription:[]
    })
    let token=Cookies.get("jwtToken");

    useEffect(()=>{

        const jobDetail=async()=>{

         let api="https://apis.ccbp.in/jobs";

         const option={
            method:"Get",
            headers:{
                Authorization:`Bearer ${token}`
            }
         }

         const response=await fetch(api,option)
         const jobData=await response.json()
      
         if(response.ok===true){
            setAllValues({...allValues,jobDescription:jobData.jobs})
            console.log(allValues)
         }
        
        }

       
        
        jobDetail();
      
        

        
    },[])



    


    return (

        
        <>
        <Header/>

                <div className="job-sec">
                    <div className="filter-job-sec">
                        
                        <FilterJob/>
                    </div>
                    <div className="display-All-job-sec">
                      <ul className="display-job-ul">
                        {
                            allValues.jobDescription.map((each)=>{
                                return <DisplayJob listItem={each} key={each.id}/>
                            })
                        }
                      </ul>
                    </div>
                </div>



        </>
   
    )
}