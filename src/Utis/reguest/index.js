import { useEffect } from "react"
import axios from "axios"
    const instance = axios.create({
        baseURL:'https://api.coincap.io/v2/',
        timeout: 1000,
    });
    export default instance

