import axios from "axios";

const baseDomain = 'http://localhost:3000/api';

export const customHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
}

export const baseUrl = `${baseDomain}`;

export default axios.create({
    baseUrl,
    headers: customHeaders
})