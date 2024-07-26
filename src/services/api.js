import axios from "axios";

export const fetcher = (url) => fetch(url).then((res) => res.json());

export const creatList = async (data) => {
    const response = axios.post("http://localhost:3002/job-list", data);
    return (await response).data;

} 