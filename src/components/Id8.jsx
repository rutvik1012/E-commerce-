import axios from 'axios'
import React, { useEffect,useState } from 'react'

const Id8 = () => {
    const [data, setData] = useState([])


    useEffect(()=>{
        const getData =async()=>{
            const response= await axios.get('https://api.escuelajs.co/api/v1/products')
            setData(response.data)
        }
        getData()
    },[])
    console.log(data);
  return (
    <div>Id8</div>
  )
}

export default Id8