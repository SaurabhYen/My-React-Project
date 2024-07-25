import "./FilterJob.css"
import { useState } from "react"
import { useEffect } from "react"
import Cookies from "js-cookie"

export default function FilterJob(){

    const [allValues,setallValue]=useState({
        profileDetail:{}
    })
    let token=Cookies.get("jwtToken")

   let obj=[
    {
        EmplyoeeType:"Full Time",
        EmplyoeeId: "FULLTIME"
    },
    {
        EmplyoeeType:"Part Time",
        EmplyoeeId: "PARTTIME"
    },
    {
        EmplyoeeType:" Freelance",
        EmplyoeeId: "FREELANCE"
    },
    {
        EmplyoeeType:"Internship",
        EmplyoeeId: "INTERNSHIP"
    }
   ]

   let salaryRange=[
    {
        label:"10 LPA and Above" ,
        salaryRangeId: 1000000
    },
    {
        label:"20 LPA and Above" ,
        salaryRangeId: 2000000
    },
    {
        label:"30 LPA and Above" ,
        salaryRangeId: 3000000
    },
    {
        label:"40 LPA and Above" ,
        salaryRangeId: 4000000
    }
   ]

   useEffect(()=>{
            
             let profilDetalFunction=async()=>{
                      
                let Api="https://apis.ccbp.in/profile"

                let option={
                    method:"Get",
                    headers:{
                        Authorization:` Bearer ${token}`
                    }
                }

                let response= await fetch(Api,option)

                let profileData= await response.json();
             
                if(response.ok===true){

                    setallValue({...allValues,profileDetail:profileData.profile_details})
                  
                    
                }
               

             }
             profilDetalFunction();
   },[])


    return (
        
            <>
                    <div className="profile-sec">
                        <img src={allValues.profileDetail.profile_image_url} alt="" />
                        <h5>{allValues.profileDetail.name}</h5>
                        <p>{allValues.profileDetail.short_bio}</p>
                    </div>

                    <div className="seperation"></div>

                    <div className="employee-sec">
                        <h3>Type of Employeement</h3>
                        <ul className="ullist-sec">
                            { 
                                obj.map((e)=>{
                                        return <li className="list-employe-type" key={e.EmplyoeeId}>
                                                    <input type="checkbox" className="inpcheckBox"  id={e.EmplyoeeId} />
                                                    <label htmlFor={e.EmplyoeeId}>{e.EmplyoeeType}</label>
                                                </li>
                                    })
                                }
                            </ul>
                    </div>

                    <div className="seperation"></div>

                    <div className="salary-sec employee-sec">
                    <h3>Salary Range</h3>
                        <ul className="ullist-sec">
                            { 
                                salaryRange.map((e)=>{
                                        return <li className="list-employe-type" key={e.salaryRangeId}>
                                                    <input type="checkbox" className="inpcheckBox"  id={e.salaryRangeId} />
                                                    <label htmlFor={e.salaryRangeId}>{e.label}</label>
                                                </li>
                                    })
                                }
                            </ul>
                    </div>
            </>
      
    )
}