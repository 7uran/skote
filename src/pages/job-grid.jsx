import React, { useState } from 'react';
import { BiSearchAlt } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";
import Card from '../components/cards/card';
import useSWR from 'swr';
import { fetcher } from '../services/api';

const JobGridPage = () => {
  const [inputType, setInputType] = useState('text');
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const { data } = useSWR('http://localhost:3002/job-list', fetcher);

  const jobList = Array.isArray(data) ? data : [];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocationFilter(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  const filteredJobs = jobList
    .filter(job =>
      job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.companyName.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(job =>
      job.location.toLowerCase().includes(locationFilter.toLowerCase())
    )
    .filter(job =>
      job.type.toLowerCase().includes(categoryFilter.toLowerCase())
    );

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

  return (
    <div className='w-full p-6 text-white flex flex-col gap-4 min-h-screen'>
      <div className='flex items-center justify-between'>
        <h1 className='py-2 font-bold'>JOBS GRID</h1>
        <p className='text-sm'>Jobs / Jobs Grid</p>
      </div>

      <div className='bg-elementsColor rounded'>
        <div className='flex px-4 py-6 justify-between'>
          <input
            placeholder='Search your job'
            className='placeholder-textColor w-[35%] text-white bg-elementsColor border rounded border-borderColor text-xs p-2'
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <input
            placeholder='San Francisco,LA'
            className='placeholder-textColor w-[15%] text-white bg-elementsColor border rounded border-borderColor text-xs p-2'
            value={locationFilter}
            onChange={handleLocationChange}
          />
          <input
            placeholder='Job Categories'
            className='placeholder-textColor w-[15%] text-white bg-elementsColor border rounded border-borderColor text-xs p-2'
            value={categoryFilter}
            onChange={handleCategoryChange}
          />
          <input
            placeholder='Select time'
            className='placeholder-textColor w-[15%] text-white bg-elementsColor border rounded border-borderColor text-xs p-2'
            type={inputType}
            onFocus={() => setInputType('date')}
            onBlur={() => setInputType('text')}
          />
          <button className='px-3 py-2 w-[100px] h-[33px] text-white bg-[#556EE6] hover:bg-[#475ec5] transition font-medium rounded text-xs text-center flex items-center gap-1'>
            <BiSearchAlt /> Find Jobs
          </button>
          <button className='px-3 py-2 w-[100px] h-[33px] text-white bg-[#74788D] hover:bg-[#66697b] transition font-medium rounded text-xs text-center flex items-center gap-1'>
            <FiFilter /> Advance
          </button>
        </div>
      </div>

      <div className='min-h-screen flex flex-wrap justify-between'>
        {filteredJobs.map(job => {
          const { bgColor, textColor } = getTypeStyles(job.type);
          return (
            <Card
              key={job.id}
              img={job.jobImg}
              bgColor={bgColor}
              textColor={textColor}
              type={job.type}
              location={job.location}
              company={job.companyName}
              title={job.jobTitle}
              experience={job.experience}
            />
          );
        })}
      </div>
    </div>
  );
};

export default JobGridPage;
