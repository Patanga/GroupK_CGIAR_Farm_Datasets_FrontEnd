import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 300000,
    crossDomain: true
});

api.interceptors.request.use(config => {
    // console.log(config)
    return config
}, err => {
    Promise.reject(err)
})

api.interceptors.response.use(res => {
    // console.log(res)
    return Promise.resolve(res)
}, err => {
    Promise.reject(err)
})

export default api

