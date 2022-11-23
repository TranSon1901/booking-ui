import { useEffect, useState } from "react"
import axios from 'axios'
const UseFetch=(url)=>{
    const [data,setDate]=useState([])
    const [loading,setLoading]=useState(false)
    const [erorr,setErorr]=useState(false)

    useEffect(()=>{
        const fetchData= async ()=>{
            setLoading(true)
            try{
                const res= await axios.get(url)
                setDate(res.data)
            }catch(err){
                setErorr(err)
            }
            setLoading(false)
        }
        fetchData()
    },[url])
    const reFetch= async ()=>{
        setLoading(true)
        try{
            const res=await axios.get(url)
            setDate(res.data)
        }catch(err){
            setErorr(err)
        }
        setLoading(false)
    }
    return {data,loading,erorr,reFetch}
}
export default UseFetch
