import axios from "axios"

const url: string = "https://advance-productivity-back-end.onrender.com/api/v1/auth"

export const createUser = async(data: any) =>{
    try {
        return await axios.post(`${url}/register`, data).then((res: any)=>{
            return res.data.data
        })
    } catch (error) {
        console.log(error);        
    }
}

export const signinUser = async(data: any)=>{
    try {
        return await axios.post(`${url}/sign-in`, data).then((res: any)=>{
            return res.data.data
        })
    } catch (error) {
        console.log(error);        
    }
}

export const readUser = async()=>{
    try {
        return await axios.get(`${url}/all-users`).then((res: any)=>{
            return res.data.data
        })
    } catch (error) {
        console.log(error);   
    }
}