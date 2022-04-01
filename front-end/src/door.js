import React from "react";

 export function College()
{
    const imgsrc=
    {
        width:'550px',
        height:'550px',
        boxShadow:'10px 10px 10pxb    '
    }
    const base=
    {
        
        fontFamily:'Bowlby One SC',
        fontSize: '25px',
        color:'red'
    }

    const tab=
    {
        border: '3px',
        borderStyle: 'Dotted',
        borderColor: 'pink' ,
        borderRadius: '10px'
    }

    return(
    <>
    <p style={base}>Manojkumar</p>
    <p style={{color:'blue'}}>I am manojkumar,KSR student -2021 Passed out</p>
    <ul style={tab}>KSR  INSTITUTIONS DETAILS
        <li>KSR for womens</li>
        <li>KSR for Technology</li>
        <li>KSR  for Dental </li>
        <li>KSR for Arts and Science</li>
    </ul>
    <img style={imgsrc} src="Images/Park.jpg"></img>
    </>)
}