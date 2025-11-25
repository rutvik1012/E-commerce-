import axios from "axios"

export const Product =async()=>{
    const response=await axios.get(`https://api.escuelajs.co/api/v1/products`)
    return response.data
} 