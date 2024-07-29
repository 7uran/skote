import React, { useState } from 'react';
import { IoMdRefresh } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Modal from '../widgets/modal';
import Table from '../components/table/table';

const HomePage = () => {
    const [inputType, setInputType] = useState('text');
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [typeFilter, setTypeFilter] = useState('');

    const handleStatusChange = (event) => {
        setStatusFilter(event.target.value);
    };

    const handleTypeChange = (event) => {
        setTypeFilter(event.target.value);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className='w-full p-6 text-white flex flex-col gap-4 min-h-screen'>
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
                    <input 
                        placeholder='Search for...' 
                        className='w-[35%] text-white bg-elementsColor border rounded border-borderColor text-xs p-2' 
                        value={searchTerm} 
                        onChange={handleSearchChange} 
                    />
                    <select 
                        className='w-[15%] text-white bg-elementsColor border rounded border-borderColor text-xs p-2'
                        onChange={handleStatusChange}
                        value={statusFilter}
                    >
                        <option value="">All</option>
                        <option value="Active">Active</option>
                        <option value="New">New</option>
                        <option value="Close">Close</option>
                    </select>
                    <select 
                        className='w-[15%] text-white bg-elementsColor border rounded border-borderColor text-xs p-2'
                        onChange={handleTypeChange}
                        value={typeFilter}
                    >
                        <option value="">Select Type</option>
                        <option value="Full Time">Full Time</option>
                        <option value="Part Time">Part Time</option>
                        <option value="Freelance">Freelance</option>
                        <option value="Internship">Internship</option>
                    </select>
                    <input
                        placeholder='Select time'
                        className='w-[15%] text-white bg-elementsColor border rounded border-borderColor text-xs p-2'
                        type={inputType}
                        onFocus={() => setInputType('date')}
                        onBlur={() => setInputType('text')}
                    />
                </div>

                <Table searchTerm={searchTerm} statusFilter={statusFilter} typeFilter={typeFilter} />
            </div>
        </div>
    );
}

export default HomePage;
