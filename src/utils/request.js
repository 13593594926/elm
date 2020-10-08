import axios from 'axios'
const Server = axios.create({
    baseURL: 'http://elm.cangdu.org',
    timeout: '2000',
    // withCredentials:true,
})
Server.interceptors.request.use((config) => {
    return config
})
Server.interceptors.response.use((res) => {
    return res
})
export default Server