import Header from "../Header/Header";
import "./Home.css"
import { useNavigate } from "react-router-dom";



export default function Home(){
    let navigate=useNavigate();
    let btnClik=()=>{
        navigate('/job')
    }

    return (
        <div className="Home-cont">
             <Header/>
                
                   
                   <div className="home-left-cont">
                        <h1>Find The Job That Fits Your Life</h1>
                        <p>Millions of people are searching for jobs, sallery, information,   company reviews. Find the jobs that fits your ability and your potential</p>
                        <button type="button" onClick={btnClik} className="btn btn-primary jobBtnt">Finds Jobs</button>
                   </div>
               

        </div>
    )
}