import axios from 'axios';

class ApiService {

    login = (userObj) => {
        return axios.post('/user/login', userObj);
    }

    register = (userObj) =>{
        return axios.post('/user/register', userObj);
    }

    getUserDetails = (id) => {
        return axios.get(`/user/${id}`);
    }

}

export default ApiService;