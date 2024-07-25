import { useEffect } from "react"
import Header from "../Header/Header"
import Cookies from "js-cookie"
import "./Job.css"
import { useState } from "react"
import DisplayJob from "../DisplayJobSec/DisplayJobdesc"
import FilterJob from "../FilterJobSec/FilterJob"




export default function Job(){
    let [allValues,setAllValues]=useState({
        jobDescription:[],
        userSearch:"",
        employeType:[],
        employesalary:""
    })

 let token=Cookies.get("jwtToken");

    useEffect(()=>{

        const jobDetail=async()=>{

         let api=`https://apis.ccbp.in/jobs?employment_type=${allValues.employeType}&minimum_package=${allValues.employesalary}&search=${allValues.userSearch}`;

         const option={
            method:"Get",
            headers:{
                Authorization:`Bearer ${token}`
            }
         }

         const response=await fetch(api,option)
         const jobData=await response.json()
         
      console.log(jobData.jobs)
         if(response.ok===true){
            setAllValues({...allValues,jobDescription:jobData.jobs})
            
         }
        
        }
        jobDetail();   
    },[allValues.userSearch,allValues.employeType,allValues.employesalary])


   let onseraEnterInput=(e)=>{
     if(e.key === "Enter"){
        setAllValues({...allValues,userSearch:e.target.value})
       }
    }

    let employeTypeFunction=(value,checked)=>{
        if(checked===true){
            setAllValues({...allValues,employeType:[...allValues.employeType,value]})
        }
        else{
            setAllValues({...allValues,employeType: allValues.employeType.filter((e)=>{
                if(e !==value){
                    return value;
                }
            })})
        }
        
        
    }

    // let dis=(e)=>{
    //     console.log(allValues.employeType)
    // }<button onClick={dis}>ondisp</button>

    let EmpSalaryFun=(value)=>{
         setAllValues({...allValues,employesalary:value})
    }

    return (

        
        <>
        <Header/>

                <div className="job-sec">
                    <div className="filter-job-sec">
                        
                        <FilterJob EmployeeFun={employeTypeFunction} EmpSalary={EmpSalaryFun}/>
                    </div>
                    <div className="display-All-job-sec">
                        
                        <input type="search" onKeyDown ={onseraEnterInput} className="form-control w-75 inputSearch" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
                       
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