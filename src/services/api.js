import axios from "axios";

export const fetcher = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log('Fetched Data:', data); 
    return data;
};

export const creatList = async (data) => {
    const response = axios.post("http://localhost:3002/job-list", data);
    return (await response).data;
};
