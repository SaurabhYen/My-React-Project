import {Route,Routes} from  "react-router-dom"
import { Component } from "react"
import './App.css'
import Home from './Component/Home/Home'
import Login from "./Component/Login/Login"
import Job from "./Component/Job/Job"
import Protected from "./Component/ProtectedRoute/Protected"
import NotFoundComp from "./Component/Unknown/NotFound"
function App() {

  return (
    
      <Routes>

            <Route path="/"      element={< Protected Component={<Home/>}/>}></Route>
            <Route path="/job"   element={< Protected Component={<Job/>}/>}></Route>
            <Route path="/login" element={< Login/>}></Route>
            <Route path="/*" element={<NotFoundComp />}></Route>

      </Routes>
  )
}

export default App
