import "./DetailedCom.css"
import { useParams } from "react-router-dom"
import Cookies from "js-cookie"
import { useEffect } from "react";
import { useState } from "react";
import { IoIosStar } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { PiHandbagSimpleFill } from "react-icons/pi";
import Header from "../Header/Header"

export default function DetailComp(){

    const {id}= useParams()

    const token=Cookies.get("jwtToken");
    
    const [allValues,setAllValues]=useState({job_detailsDesc:{},similarjob:[],job_life_at_company:{},skillsSec:[] ,life_at_companySec:{}   })

    useEffect(()=>{
        
        
        const userDeatl= async()=>{
           
        const Api=`https://apis.ccbp.in/jobs/${id}`

        const option={
            method:"Get",
            headers:{
                Authorization:` Bearer ${token}`
            }
        }

        const response= await fetch(Api,option)
        const jobDetailresponse= await response.json();
        console.log(jobDetailresponse)
        // console.log(jobDetailresponse.job_details.company_logo_url)
        // console.log(jobDetailresponse.job_details.job_description)
        
       
            setAllValues({...allValues,job_detailsDesc:jobDetailresponse.job_details,similarjob:jobDetailresponse.similar_jobs,job_life_at_company:jobDetailresponse.life_at_company,skillsSec:jobDetailresponse.job_details.skills,life_at_companySec:jobDetailresponse.job_details.life_at_company})
            console.log(jobDetailresponse.job_details.skills)
           
        

     }
     userDeatl()


    },[]);


    return (
        <>
        
         <li className="job-cards" >
         <Header/>
               <div className="job-card-content">
                  <div className="jobcard-top-cont">
                    <img src={allValues.job_detailsDesc.company_logo_url} alt="" className="companyName"/>
                    <div className="job-card-bottom">
                       <h3>{allValues.job_detailsDesc.title}</h3>
                       <span className="ratingSec">
                       <IoIosStar  className="star-icon" />
                       <h4>{allValues.job_detailsDesc.rating}</h4>
                       </span>
                    </div>
                  </div>

                  <div className="location-sec">
                     <span className="locaton-desc">
                        <p><IoLocationSharp className="locationIcon" />{allValues.job_detailsDesc.location
                        } </p>
                        <p> <PiHandbagSimpleFill className="locationIcon" /> {allValues.job_detailsDesc.employment_type}</p>
                     </span>
                     <h5>{allValues.job_detailsDesc.package_per_annum}</h5>
                  </div>
                  <div className="separation"></div>
                  <div className="desc-sec">
                     <h3>Description</h3>
                     <p>{allValues.job_detailsDesc.job_description}</p>
                  </div>

                  <div className="skill-sec">
                    <h3>Skills</h3>
                    <ul className="company-name-sec">
                        

                        
                            {
                                allValues.skillsSec.map((e)=>{
                                    return <li key={e.name} className="skils-copnylogo-img">
                                               <img src={e.image_url} alt="image_url" className="image_url" />
                                               <h4>{e.name}</h4>
                                           </li>

                                })
                            }

                         
                        

                    </ul>
                  </div>

                  <div className="life-at-Com-sec">
                    <h3>Life at Company</h3>
                    <div className="com-info-sec">
                        <p className="cmpn-desc">
                            {
                               
                                  allValues.life_at_companySec.description

                            }
                        </p>
                        <img src={allValues.life_at_companySec.image_url} alt="" className="cmpn-Img" />
                    </div>
                  </div>

               </div>
               <div className="similarjob-Heading"><h3>Similar Job</h3></div>
               <ul className="similar-job-sec">
                  
                 
                       {
                          allValues.similarjob.map((e)=>{
                            return <li key={e.id} className="simliarJob-card">
                                         
                                         <div className="top-sec">
                                            <img className="similar-job-logo" src={e.company_logo_url} alt="" />
                                            <div className="r-sec">
                                                <h4>{e.title}</h4>
                                                <span className="ratingSec">
                                                <IoIosStar  className="star-icon" />
                                                <h4>{e.rating}</h4>
                                                </span>
                                            </div>
                                         </div>
                                         <div className="desc-sec">
                                            <h3>Description</h3>
                                            <p>{e.job_description}</p>
                                        </div>
                                        <div className="location-sec">
                                            <span className="locaton-desc">
                                                <p><IoLocationSharp className="locationIcon" />{e.location} </p>
                                                <p> <PiHandbagSimpleFill className="locationIcon" />{e.employment_type}</p>
                                            </span>
                                           
                                        </div>

                                   </li>
                          })
                       }

               </ul>
         </li>
        </>
        
    
        
    )
}