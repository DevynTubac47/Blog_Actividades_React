import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://127.0.0.1:3001/blogActivity/v1",
    timeout:3000,
    httpsAgent: false,
})

export const getPublications = async () => {
    try{
        return await apiClient.get('/publication/')
    }catch(e){
        return{
            error: true,
            message: e.message
        }
    }
}

export const getPublicationsPage = async (id) => {
    try{
        return await apiClient.get(`/publication/publications`)
    }catch(e){
        return{
            error: true,
            message: e.message
        }
    }
}