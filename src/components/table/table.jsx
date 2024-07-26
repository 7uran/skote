import React, { useState } from 'react'
import { IoMdRefresh } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";
const Table = () => {
    const [inputType, setInputType] = useState('text');
    return (
        <div className='w-full  p-6 text-white  flex flex-col gap-4  '>
            <div className='flex items-center justify-between'>
                <h1 className='py-2 font-bold'>
                    JOBS LISTS
                </h1>
                <p className='text-sm'>Jobs / Jobs Lists</p>
            </div>

            <div className='bg-elementsColor rounded'>
                <div className='px-4 py-6 flex flex-row items-center justify-between border-b-2 border-b-borderColor'>
                    <div><h2 className=''>Jobs Lists</h2></div>
                    <div className='flex items-center gap-1'>
                        <button className='bg-[#556EE6] p-2 text-sm rounded'>
                            Add New Job
                        </button>
                        <button className='bg-[#32394E] rounded p-3 text-sm'><IoMdRefresh /></button>
                        <button className='bg-[#50C38F] rounded p-3 text-sm'><HiOutlineDotsVertical /></button>
                    </div>

                </div>
                <div className='flex px-4 py-6 justify-between'>
                    <select className='w-[239px] text-white bg-elementsColor border rounded border-borderColor text-xs p-2'>
                        <option>Show 10</option>
                        <option>Show 20</option>
                        <option>Show 30</option>
                        <option>Show 40</option>
                        <option>Show 50</option>
                    </select>
                    <input placeholder='Search for...' className='w-[503px] text-white bg-elementsColor border rounded border-borderColor text-xs p-2 ' />
                    <select className='w-[239px] text-white bg-elementsColor border rounded border-borderColor text-xs p-2'>
                        <option value="" disabled selected>Status</option>
                        <option>All</option>
                        <option>Active</option>
                        <option>New</option><option>Close</option>

                    </select>
                    <select className='w-[239px] text-white bg-elementsColor border rounded border-borderColor text-xs p-2'>
                        <option value="" disabled selected>Select Type</option>
                        <option>All</option>
                        <option>Full Time</option>
                        <option>Part Time</option>

                    </select>
                    <input
                        placeholder='Select time'
                        className='w-[239px] text-white bg-elementsColor border rounded border-borderColor text-xs p-2'
                        type={inputType}
                        onFocus={() => setInputType('date')}
                        onBlur={() => setInputType('text')}
                    />
                </div>
                <div className='px-4 py-6'>
                    <table className='w-full  '>
                        <thead className=''>
                            <tr className='text-left w-full text-textColor text-sm border-y-2 border-y-borderColor'>
                                <th>No</th>
                                <th>Job Title</th>
                                <th>Company Name</th>
                                <th>Location</th>
                                <th>Experience</th>
                                <th>Position</th>
                                <th>Type</th>
                                <th>Posted Date</th>
                                <th>Last Date</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='border-y-2 border-y-borderColor '>
                                <td>1</td>
                                <td>Magento Developer</td>
                                <td>Themesbrand</td>
                                <td>California</td>
                                <td>0-2 Years</td>
                                <td>2</td>
                                <td>Full Time</td>
                                <td>02 June 2021</td>
                                <td>25 June 2021</td>
                                <td>Active</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>


        </div >
    )
}

export default Table