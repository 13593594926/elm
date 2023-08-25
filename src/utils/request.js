import axios from 'axios'
const Server = axios.create({
    baseURL: 'https://elm.cangdu.org',
    timeout: 10000,
    // withCredentials:true,
})
Server.interceptors.request.use((config) => {
    return config
})
Server.interceptors.response.use((res) => {
    return res
})
export default Server