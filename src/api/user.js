import axios from 'axios';

export const apiLogin = request_data =>{
    return axios.post('/participant/login', request_data)
}

export const apiLoginAdmin = request_data =>{
    return axios.post('http://localhost:8080/admin/login', request_data)
}

export const apiSignUp = (request_data) =>{
    return axios.post('/participant/signUp', request_data)
}