import axios from "axios";
import { toast } from "react-toastify";
import { mutate } from "swr";

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


export const handleDelete = async (id) => {
    try {
        await axios.delete(`http://localhost:3002/job-list/${id}`);
        mutate('http://localhost:3002/job-list');
        toast.success('Job deleted successfully!');
    } catch (error) {
        console.error(error);
        toast.error('Error deleting job');
    }
};