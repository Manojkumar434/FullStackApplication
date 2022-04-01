
let signin=[
    {
        "Fname":" Manojkumar",
        "Young":21,
        "Sal":3.6,
        "City1":"Namakkal",
        "Yes":["Java,Python"]
    },
    {
        "Fname":"Pavithra",
        "Young":24,
        "Sal":4.6,
        "City1":"Chennai",
        "Yes":["Java"]
    },
    {
        "Fname":"Vijayasarathi",
        "Young":20,
        "Sal":6.8,
        "City1":"Salem",
        "Yes":["Java, Python, Java Script"]
    },
    {
        "Fname":"Aarthi",
        "Young":25,
        "Sal":10.6,
        "City1":"Chennai",
        "Yes":["Java,Python"]
    },
    {
        "Fname":"Uma",
        "Young":24,
        "Sal":62.8,
        "City1":"Trichy",
        "Yes":["Java,Python, Java Script"]
    }
]

export const create=(ele)=>{
    signin.push(ele)
}

export const list=()=>{
    return signin
}
export const read1=(index)=>
{
    return signin[index]
}

export const fetchExact=(name)=>{
    const tmp=signin.filter((element)=>{
        return element.Fname===name
    })
    return tmp[0]
}

export const alter=(place,data)=>{
    signin[place]=data
}