import axios from "axios"
export const clientAxios = axios.create({
    baseURL : 'http://localhost:4000/api'
})


// ${import.meta.env.VITE_URL_BACKEND}