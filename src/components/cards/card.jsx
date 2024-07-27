import React from 'react';
import { MdLocationOn } from "react-icons/md";

const Card = ({ img, bgColor, textColor, type, location, company, title, experience }) => {
    return (
        <div className='w-[23%] min-h-[100px] h-fit bg-elementsColor rounded p-5 flex flex-col gap-3'>
            <div className='flex  gap-3 flex-col '>
                <img className='rounded w-[50px]' src={img} alt="Company Logo" />
                <div className='flex flex-row items-center gap-1'>
                    <h4 className='text-lg font-bold whitespace-nowrap'>{title}</h4>
                    <p className='text-sm text-textColor whitespace-nowrap'>({experience}  Exp.)</p>
                </div>
            </div>
            <div className='text-[13px] text-textColor flex flex-col gap-1'>
                <div className='flex items-center gap-4'>
                    <p className='whitespace-nowrap'>{company}</p>
                    <p className='flex items-center'>
                        <MdLocationOn /> {location}
                    </p>
                </div>
                <div>
                    <p>$250 - $800 / month</p>
                </div>
            </div>
            <div className='flex gap-2 py-3'>
                <button className={`${bgColor} w-fit text-[10px] px-2 h-4 rounded ${textColor}`}>{type}</button>
                <button className='w-fit text-[10px] px-2 h-4 rounded bg-[#F1AA4D]/50 text-[#F1AA4D]'>Urgent</button>
                <button className='w-fit text-[10px] px-2 h-4 rounded bg-[#3D9CF1]/50 text-[#3D9CF1]'>Private</button>
            </div>
            <div className='flex gap-2'>
                <button className='bg-[#34C37D]/20 w-[50%] text-[#34C37D] rounded px-2 py-2 text-sm'>View Profile</button>
                <button className='bg-[#546DD3]/20 w-[50%] text-[#546DD3] rounded px-2 py-2 text-sm'>Apply Now</button>
            </div>
        </div>
    );
};

export default Card;
