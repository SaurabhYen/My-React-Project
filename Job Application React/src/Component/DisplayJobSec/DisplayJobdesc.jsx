import "./DisplayJob.css"
import { IoIosStar } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { PiHandbagSimpleFill } from "react-icons/pi";


export default function DisplayJob(prop){
     const {listItem}=prop;
     
    // {company_logo_url: "https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png"
    // employment_type: "Internship"
    // id: "bb95e51b-b1b2-4d97-bee4-1d5ec2b96751"
    // job_description: "We are looking for a DevOps Engineer with a minimum of 5 years of industry experience, preferably working in the financial IT community. The position in the team is focused on delivering exceptional services to both BU and Dev partners to minimize/avoid any production outages. The role will focus on production support."
    // location: "Delhi"
    // package_per_annum: "10 LPA"
    // rating: 4
    // title: "Devops Engineer"}

    return (
         <li className="job-card">
               <div className="job-card-cont">
                  <div className="jobcard-top-cont">
                    <img src={listItem.company_logo_url} alt="" className="companyName"/>
                    <div className="job-card-bottom">
                       <h3>{listItem.title}</h3>
                       <span className="ratingSec">
                       <IoIosStar  className="star-icon" />
                       <h4>{listItem.rating}</h4>
                       </span>
                    </div>
                  </div>

                  <div className="location-sec">
                     <span className="locaton-desc">
                        <p><IoLocationSharp className="locationIcon" />Delhi </p>
                        <p> <PiHandbagSimpleFill className="locationIcon" /> Internship</p>
                     </span>
                     <h5>{listItem.package_per_annum}</h5>
                  </div>
                  <div className="separation"></div>
                  <div className="desc-sec">
                     <h3>Description</h3>
                     <p>{listItem.job_description}</p>
                  </div>

               </div>
         </li>
    )
}