import useSWR, { mutate } from 'swr';
import React, { useState } from 'react';
import { IoMdRefresh } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoEye } from "react-icons/io5";
import { FaPen } from "react-icons/fa";
import { PiTrashSimpleLight } from "react-icons/pi";
import axios from 'axios';
import { fetcher } from "../../services/api";
import Modal from '../../widgets/modal';

const Table = () => {
    const { data, error } = useSWR('http://localhost:3002/job-list', fetcher);
    const [inputType, setInputType] = useState('text');

    if (error) return <div>Yüklenemedi</div>;
    if (!data) return <div>Yükleniyor...</div>;

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
            mutate('http://localhost:3002/job-list'); // Veriyi yeniden yükle
        } catch (error) {
            console.error('Silme hatası:', error);
        }
    };

    return (
        <div className='w-full p-6 text-white flex flex-col gap-4'>
            <div className='flex items-center justify-between'>
                <h1 className='py-2 font-bold'>JOBS LISTS</h1>
                <p className='text-sm'>Jobs / Jobs Lists</p>
            </div>

            <div className='bg-elementsColor rounded'>
                <div className='px-4 py-6 flex flex-row items-center justify-between border-b-2 border-b-borderColor'>
                    <div><h2 className=''>Jobs Lists</h2></div>
                    <div className='flex items-center gap-1'>
                        <Modal />
                        <button className='bg-[#32394E] rounded p-3 text-sm'><IoMdRefresh /></button>
                        <button className='bg-[#50C38F] rounded p-3 text-sm'><HiOutlineDotsVertical /></button>
                    </div>
                </div>

                <div className='flex px-4 py-6 justify-between'>
                    <select className='w-[15%] text-white bg-elementsColor border rounded border-borderColor text-xs p-2'>
                        <option>Show 10</option>
                        <option>Show 20</option>
                        <option>Show 30</option>
                        <option>Show 40</option>
                        <option>Show 50</option>
                    </select>
                    <input placeholder='Search for...' className='w-[35%] text-white bg-elementsColor border rounded border-borderColor text-xs p-2' />
                    <select className='w-[15%] text-white bg-elementsColor border rounded border-borderColor text-xs p-2'>
                        <option value="" disabled defaultValue>Status</option>
                        <option>All</option>
                        <option>Active</option>
                        <option>New</option>
                        <option>Close</option>
                    </select>
                    <select className='w-[15%] text-white bg-elementsColor border rounded border-borderColor text-xs p-2'>
                        <option value="" disabled defaultValue>Select Type</option>
                        <option>All</option>
                        <option>Full Time</option>
                        <option>Part Time</option>
                        <option>Freelance</option>
                    </select>
                    <input
                        placeholder='Select time'
                        className='w-[15%] text-white bg-elementsColor border rounded border-borderColor text-xs p-2'
                        type={inputType}
                        onFocus={() => setInputType('date')}
                        onBlur={() => setInputType('text')}
                    />
                </div>

                <div className='px-4 py-6'>
                    <table className='w-full'>
                        <thead className=''>
                            <tr className='text-left w-full text-textColor text-sm border-y-2 border-y-borderColor'>
                                <th className='p-3'>No</th>
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
                                        <td className='p-3'>{job.jobTitle}</td>
                                        <td className='p-3'>{job.companyName}</td>
                                        <td className='p-3'>{job.location}</td>
                                        <td className='p-3'>{job.experience}</td>
                                        <td className='p-3'>{job.position}</td>
                                        <td className='p-3'>
                                            <div className={`${bgColor} w-fit text-[10px] px-1 rounded ${textColor}`}>
                                                {job.type}
                                            </div>
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
            </div>
        </div>
    );
};

export default Table;
