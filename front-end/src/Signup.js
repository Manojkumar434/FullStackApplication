import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { create } from "./Yash";

export const Hapiee=()=>
{
    const[sign,setsign]=useState(
        {
            "Fname":"",
            "Young":0,
            "Sal":0,
            "City1":"",
            "Yes":new Array()
        })

        const euro=(hey)=>{
            const{value}=hey.target
            sign.Yes.push(value)
        }

            const tracky=(maddy)=>
            {
                //extraction
                const{name,value}=maddy.target

                
                setsign(
                    (old)=>{
                    return{
                        ...old,
                        [name]:value
                        }
                    }
                )

            }
    const abc=()=>
    {
        // alert("Enrolled Successfully "+JSON.stringify(sign))
        create(sign)
    }
    const bca=()=>
    {
        alert("Rejected your address details")
    }

    return(
        <>
        <div className="container mt-5">
            <h2 className="text-center text-primary text-uppercase">Signup</h2>
            <div className="row justify-content-center">
            <div className="col-lg-7 col-md-10 col-sm-12 shadow-lg p-3">
                <div className="form group">
                    <label>Firstname</label>
                    <input 
                        type="text"
                        name="Fname"
                        placeholder="Enter the your name"
                        onChange={tracky}
                        value={sign.Fname}
                        className="form-control"
                    />
                    <label>Age</label>
                    <input type="number"
                    name="Young"
                    placeholder="Enter the age"
                    onChange={tracky}
                    value={sign.Young}
                    className="form-control"
                    />
                    <label>Income</label>
                    <input type="number"
                    name="Sal"
                    placeholder="Enter the salary"
                    onChange={tracky}
                    value={sign.Sal}
                    className="form-control"
                    />
                    <div className="form-group mt-3">
                        <label>Select your City</label>
                        <select name="City1" onChange={tracky} value={sign.City1} className="form-select" >
                        <option>select city</option>
                        <option>Namakkal</option>
                        <option>Salem</option>
                        <option>Chennai</option>
                        <option>Banglore</option>
                        <option>Others</option>
                        </select>
                    </div>
                    <div className="form-check-lnline mt-3">
                        <label className="me-sm-5 me-lg-5">Your are completed any programming Languages</label>
                        <input 
                        type="checkbox"
                        name="java"
                        onChange={euro}
                        value="Java"
                        className="form-check-input text-warning"/>Java
                        <input 
                        type="checkbox"
                        name=".nett"
                        onChange={euro}
                        value=".nett"
                        className="form-check-input text-warning"/>.nett
                         <input
                        type="checkbox"
                        name="python"
                        value="Python"
                        onChange={euro}
                        className="form-check-input ms-5"/>Python
                    </div>
                    <div class="row justify-content-around mt-4">
                        <button onClick={abc} class=" col-5 btn btn-outline-success">Signup</button>
                        <button onClick={bca} class=" col-5 btn btn-outline-danger">Cancel</button>
                    </div>
            </div>
            </div>
            </div>
        </div>
        </>
    )
}