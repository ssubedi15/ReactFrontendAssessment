import axios from 'axios';

const AVAILITY_API_BASE_URL = "http://localhost:8080/api/v1/registration";

export const createRegistration = (user) => {
    return axios.post(AVAILITY_API_BASE_URL, user);
}