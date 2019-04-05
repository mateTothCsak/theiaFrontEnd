import * as axios from "axios";


export default axios.create({
        baseURL: 'http://localhost:8080',
        timeout: 10000,
        withCredentials: true,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*"
        }
    }
)