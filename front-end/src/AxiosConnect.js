import axios from "axios";

const link="http://localhost:8080/POC1BackEnd";

export const join=async(obj)=>
{
    alert("@ connect "+JSON.stringify(obj))
    const hai= await axios.post(`${link}/puthusu`,obj)
    return hai;
}