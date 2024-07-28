import React from 'react';
import useSWR, { mutate } from 'swr';
import { fetcher } from '../../services/api';
import { IoEye } from "react-icons/io5";
import { FaPen } from "react-icons/fa";
import { PiTrashSimpleLight } from "react-icons/pi";
import axios from 'axios';
import { toast } from 'react-toastify';

const Table = () => {
    const { data, error } = useSWR('http://localhost:3002/job-list', fetcher);

    const getTypeStyles = (type) => {
        switch (type) {
            case 'Full Time':
                return {
                    bgColor: 'bg-[#339370]/50',
                    textColor: 'text-[#339370]'
                };
            case 'Part Time':
                return {
                    bgColor: 'bg-[#F46A6A]/50',
                    textColor: 'text-[#F46A6A]'
                };
            case 'Freelance':
                return {
                    bgColor: 'bg-[#3D9CF1]/50',
                    textColor: 'text-[#3D9CF1]'
                };
            case 'Internship':
                return {
                    bgColor: 'bg-[#F1AA4D]/50',
                    textColor: 'text-[#F1AA4D]'
                };
            default:
                return {
                    bgColor: 'bg-[#d3d3d3]/50',
                    textColor: 'text-[#696969]'
                };
        }
    };

    const getStatusStyles = (status) => {
        switch (status) {
            case 'New':
                return 'bg-[#50A5F1]';
            case 'Close':
                return 'bg-[#F46A6A]';
            case 'Active':
                return 'bg-[#34C38F]';
            default:
                return 'bg-[#d3d3d3]';
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3002/job-list/${id}`);
            mutate('http://localhost:3002/job-list');
            toast.success('Job deleted successfully!');
        } catch (error) {
            console.error(error);
            toast.error('Error deleting job');
        }
    };

    if (error) return <div>Error loading data</div>;
    if (!data) return <div className='flex justify-center items-center min-h-screen'><div className='spinner'></div></div>;

    return (
        <div className='px-4 py-6'>
            <table className='w-full'>
                <thead className=''>
                    <tr className='text-left w-full text-textColor text-sm border-y-2 border-y-borderColor'>
                        <th className='p-3'>No</th>
                        <th className='p-3'>Job Image</th>
                        <th className='p-3'>Job Title</th>
                        <th className='p-3'>Company Name</th>
                        <th className='p-3'>Location</th>
                        <th className='p-3'>Experience</th>
                        <th className='p-3'>Position</th>
                        <th className='p-3'>Type</th>
                        <th className='p-3'>Posted Date</th>
                        <th className='p-3'>Last Date</th>
                        <th className='p-3'>Status</th>
                        <th className='p-3'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((job, index) => {
                        const { bgColor, textColor } = getTypeStyles(job.type);
                        const statusBgColor = getStatusStyles(job.status);
                        return (
                            <tr key={job.id} className='border-y-2 border-y-borderColor text-xs text-textColor'>
                                <td className='p-3'>{job.jobId}</td>
                                <td className='p-3'><img className='w-10 rounded' src={job.jobImg} alt='Job' /></td>
                                <td className='p-3'>{job.jobTitle}</td>
                                <td className='p-3'>{job.companyName}</td>
                                <td className='p-3'>{job.location}</td>
                                <td className='p-3'>{job.experience}Yrs</td>
                                <td className='p-3'>{job.position}</td>
                                <td className='p-3'>
                                    <button className={`${bgColor} w-fit text-[10px] px-1 rounded ${textColor}`}>
                                        {job.type}
                                    </button>
                                </td>
                                <td className='p-3'>{job.postedDate}</td>
                                <td className='p-3'>{job.lastDate}</td>
                                <td className='p-3'>
                                    <div className={`${statusBgColor} text-white w-fit px-1 rounded text-[10px]`}>
                                        {job.status}
                                    </div>
                                </td>
                                <td className='p-3'>
                                    <div className='flex items-center gap-1'>
                                        <button className='bg-[#556EE6]/20 hover:bg-[#556EE6] hover:text-white transition p-2 rounded text-[#556EE6]'><IoEye /></button>
                                        <button className='bg-[#4EA3EF]/20 hover:bg-[#4EA3EF] hover:text-white transition p-2 rounded text-[#4EA3EF]'><FaPen /></button>
                                        <button
                                            onClick={() => handleDelete(job.id)}
                                            className='bg-[#F56158]/20 hover:bg-[#F56158] hover:text-white transition p-2 rounded text-[#F56158]'
                                        >
                                            <PiTrashSimpleLight />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
