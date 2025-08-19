import axios from "axios"

export const singlePageLoader = async({request,params})=>{
    const res = await axios.get(`http://localhost:3000/api/posts/${params.id}`)

    return res.data
}

export const listPageLoader = async({request})=>{

    const query =request.url.split("?")[1]
    const res = await axios.get(`http://localhost:3000/api/posts?${query}`)

    return res.data
}
export const profilePageLoader=async()=>{
    const res=await axios.get(`http://localhost:3000/api/users/profilePosts`,{withCredentials:true})
    return res.data
}