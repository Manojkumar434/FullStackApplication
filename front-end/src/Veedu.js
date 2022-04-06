import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import { Hapiee } from "./Signup";
import { fetchExact, list } from "./Yash";
import { Padi } from "./Read";
import {  Update } from "./Update";

export const Views=()=>
{
    const[tmpArray,settmpArray]=useState([])
    const[tempArray,settempArray]=useState(false)
    const[readview,setreadview]=useState(false)
    const[updateview,setUpdateView]=useState(false)
    const[pos,setPos]=useState(0)
    const[obj,setObj]=useState({})



    const hello=()=>{
        settmpArray(list())
    }
    useEffect(()=>
    {
        hello()
    },[])


    return(
        <>
        {/* <button className="btn btn-info" onClick={hello}>view</button> */}
        
        {(tempArray)?
                <>  
                    <Hapiee/>
                    <button className="btn btn-outline-secondary" onClick={
                        ()=>{
                            settempArray(false)
                        }
                    }>
                        <i class="bi bi-skip-backward-btn-fill"></i>Back
                    </button>
                </>
                :
                (updateview)?
                <>
                    <Update who={pos} mention={obj}/>
                    <button className="btn btn-outline-secondary" onClick={
                        ()=>{
                            setUpdateView(false)
                        }
                    }>
                        <i className="bi bi-skip-backward-btn-fill"></i> Back
                    </button>
                </>
                :
                (readview)?
                <>
                <Padi who={pos}/>
                    <button className="btn btn-outline-secondary" onClick={
                        ()=>{
                            setreadview(false)
                        }
                    }>
                        <img  src="Images/download.png" alt="Pathathu pothum pinnadi pooda" /> Back
                    </button>
                </>
                :
                <>
                    <button className="btn btn-outline-success mb-3 mt-5"
                        onClick={()=>{
                            settempArray(true)
                        }}>
                        <i class="bi bi-cloud-plus"></i>New User Signup
                    </button>
        

        <div className="row justify-content-center bg-secondary">
                        <div className="table-responsive-md">
                            <table className="col-lg-8 col-md-10 col-sm-12 table table-striped p-3 shadow rounded">
                                <thead>
                                    <tr>
                                        <th>User Name</th>
                                        <th>User Age</th>
                                        <th>User Salary</th>
                                        <th>User Place </th>
                                        <th>User Skills</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tmpArray.map((elems,index)=>(
                                        <tr>
                                             <td>
                                                <button class="btn btn-outline-info" onClick={()=>{
                                                    setreadview(true)
                                                    setPos(index)
                                                }}>
                                                   READ <i class="bi bi-bookmark-heart-fill"></i>
                                                </button>
                                                {elems.Fname}
                                            </td>
                                            <td>{elems.Young}</td>
                                            <td>{elems.Sal}</td>
                                            <td>{elems.City1}</td>
                                            <td>{elems.Yes}</td>
                                            <td>
                                                <button className="btn btn-outline-warning rounded-circle"
                                                onClick={()=>{
                                                    setUpdateView(true)
                                                    setPos(index)
                                                    const y=fetchExact(elems.Fname)
                                                    setObj(y)
                                                }}>
                                                    Edit<i className="bi bi-pencil-fill"></i>
                                                </button>
                                            </td>
                                            <td>
                                                <button className="btn btn-outline-danger rounded-circle text-dark">
                                                    Delete <i class="bi bi-shield-x"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    </>
                    }
        </>
    )
}