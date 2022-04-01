import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"


export const Flower=()=>
{

    //const[data,setdate]=useState(Initialization)
    //person['sname']
    //person.sname
    const[person,setPerson]=useState(
        {
            "fno":"",
            "Svalue":"",
            "pin1":0,
            "area":"",
            "city1":"",
        })

        const tracky=(maddy)=>
        {
            const{name,value}=maddy.target
            setPerson(
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
        alert("Enrolled Successfully "+JSON.stringify(person))
    }
    const bca=()=>
    {
        alert("Rejected your address details")
    }
    return(
        <>
        <h1>BootStrap First Form </h1>
        <div className="container mt-5">
            <h1 className="row justify-content-center">IRCTC Address Details</h1>
            <div className="row justify-content-center">
                <div className="col-lg-7 col-md-10 col-sm-12 shadow-lg p-2">
                   <div className="form group">

                    <label>Flat/Door/Block no :</label>
                    <input type="text" onChange={tracky} name="fno" value={person.fno} placeholder=" enter the Flat/Door/Block no " class="form-control mt-2" />
                    
                    <label>Street/Lane details  :</label>
                    <input type="text" onChange={tracky} name="Svalue" value={person.Svalue} placeholder=" enter the Street/Lane" class="form-control mt-2" />
                    
                    <label>Pin Code</label>
                    <input type="text" onChange={tracky} name="pin1"  value={person.pin1} placeholder=" enter the Pin code" class="form-control mt-2" />
                    
                    <label>Area/Locality</label>
                    <input type="text"  onChange={tracky} name="area" value={person.area} placeholder=" enter the Area/Locality" class="form-control mt-2"/>
                   
                    <div className="form-group mt-3">
                        <label>Select your City</label>
                        <select name="city1" value={person.city1} onChange={tracky} className="form-select" >
                        <option>select city</option>
                        <option>Namakkal</option>
                        <option>Salem</option>
                        <option>Chennai</option>
                        <option>Banglore</option>
                        </select>
                    </div>
                    <div className="form-check-lnline mt-3">
                        <label className="me-sm-5 me-lg-5">Your address copy to office address</label>
                        <input 
                        type="checkbox"
                        name="Yes"
                        value="yes"
                        className="form-check-input text-warning"/>yes
                         <input
                        type="checkbox"
                        name="No"
                        value="No"
                        className="form-check-input ms-5"/>No
                    </div>
                    <div class="row justify-content-around mt-4">
                        <button onClick={abc} class=" col-5 btn btn-outline-success">ENROLL</button>
                        <button onDoubleClick={bca} class=" col-5 btn btn-outline-danger">CANCEL</button>
                    </div>

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}