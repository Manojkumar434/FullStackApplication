import { useEffect, useState } from "react"
import { read1 } from "./Yash"


export const Padi=(manoj)=>{
        const[signed,setsigned]=useState(
        {
            "Fname":"",
            "Young":0,
            "Sal":0,
            "City1":"",
            "Yes":new Array()
        })

        useEffect(()=>
        {
            jackReading()
        })
        const jackReading=()=>
        {
            setsigned(read1(manoj.who))
        }
        const head=
    {
        border: '3px',
        borderStyle: 'Double',
        borderColor: 'white' ,
        borderRadius: '100px'
    }

        return(
            <>
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <div className="card col-lg-7 col-md-10 col-sm-12 p-4 bg-dark text-light">
                            <h1 className="card-title text-start" style={head}>Check the value</h1>
                            <div className="card-body">
                                <ul type="square" className="card-text text-light">
                                    <li className="text-start"> Firstname -{signed.Fname}</li>
                                    <li className="text-start"> Age -{signed.Young}</li>
                                    <li className="text-start"> Salary -{signed.Sal}</li>
                                    <li className="text-start"> Native -{signed.City1}</li>
                                    <li className="text-start"> Skills -{signed.Yes}</li>
                                </ul>
                            {/* {signed.Fname} */}
                                {/* <p className="float-start">{signed.Young}</p>
                                <p className="float-end">{signed.Sal}</p>
                                <p className="text-center">{signed.City1}</p>
                                <br/>
                                <p className="text-center">{signed.Yes}</p> */}
                                <button className="btn btn-outline-success float-end"> Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
