import {useEffect,useState} from "react"
function usecurrecnyinfo(){
    const [data,setdata]=useState(0)
    useEffect(()=>{
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/{currency}.json`)
        .then((res)=>res.json)
        .then((res)=>setdata(res[currency]))
        return data
    },[currency])
}
export default usecurrecnyinfo;