import { useState } from 'react';
import axios from 'axios';
import { mutate } from 'swr';
import { useDropzone } from 'react-dropzone';
import { FaUpload } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        jobId: '',
        jobTitle: '',
        jobImg: '',
        companyName: '',
        location: '',
        experience: '',
        position: '',
        type: 'Full Time',
        postedDate: '25 June 2021',
        lastDate: '28 June 2021',
        status: 'Active'
    });

    const BASE_URL = "http://localhost:3002/job-list";

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const handleDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        const reader = new FileReader();
        reader.onload = () => {
            setFormData({
                ...formData,
                jobImg: reader.result
            });
        };
        reader.readAsDataURL(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(BASE_URL, formData);
            mutate(BASE_URL);
            toast.success('Job posted successfully!')
            setIsOpen(false);
        } catch (error) {
            toast.error('Error posting job!')
            console.error('Error:', error);
        }
    };

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop: handleDrop });

    return (
        <>
            <button
                onClick={toggleModal}
                className="p-2 text-white bg-[#556EE6] hover:bg-[#475ec5] transition font-medium rounded text-sm text-center"
                type="button"
            >
                Add New Job
            </button>

            {isOpen && (
                <div
                    id="crud-modal"
                    tabIndex="-1"
                    aria-hidden="true"
                    className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50"
                >
                    <div className="modal relative max-h-screen p-4 w-full max-w-[500px] bg-elementsColor rounded-lg shadow-lg overflow-auto">
                        <div className="flex items-center justify-between p-4 border-b rounded-t border-gray-600">
                            <h2 className="text-xl font-semibold text-white">
                                Add Job
                            </h2>
                            <button
                                onClick={toggleModal}
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-600 hover:text-white rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
                            >
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>

                        <form className="p-2" onSubmit={handleSubmit}>
                            <div className="space-y-2">
                                <div className='py-1 flex flex-col gap-3'>
                                    <label
                                        htmlFor="jobId"
                                        className="block text-sm font-medium text-textColor"
                                    >
                                        Job ID
                                    </label>
                                    <input
                                        type="number"
                                        id="jobId"
                                        className="bg-transparent border border-gray-600 text-white text-xs rounded block w-full p-2.5"
                                        placeholder="Insert Job ID"
                                        value={formData.jobId}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className='py-1 flex flex-col gap-3'>
                                    <label
                                        htmlFor="jobTitle"
                                        className="block text-sm font-medium text-textColor"
                                    >
                                        Job Title
                                    </label>
                                    <input
                                        type="text"
                                        id="jobTitle"
                                        className="bg-transparent border border-gray-600 text-white text-xs rounded block w-full p-2.5"
                                        placeholder="Insert Job Title"
                                        value={formData.jobTitle}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className='py-1 flex flex-col gap-3'>
                                    <label
                                        htmlFor="companyName"
                                        className="block text-sm font-medium text-textColor"
                                    >
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        id="companyName"
                                        className="bg-transparent border border-gray-600 text-white text-xs rounded block w-full p-2.5"
                                        placeholder="Insert Company Name"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className='py-1 flex flex-col gap-3'>
                                    <label
                                        htmlFor="location"
                                        className="block text-sm font-medium text-textColor"
                                    >
                                        Location
                                    </label>
                                    <input
                                        type="text"
                                        id="location"
                                        className="bg-transparent border border-gray-600 text-white text-xs rounded block w-full p-2.5"
                                        placeholder="Insert Location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className='py-1 flex flex-col gap-3'>
                                    <label
                                        htmlFor="experience"
                                        className="block text-sm font-medium text-textColor"
                                    >
                                        Experience
                                    </label>
                                    <input
                                        type="text"
                                        id="experience"
                                        className="bg-transparent border border-gray-600 text-white text-xs rounded block w-full p-2.5"
                                        placeholder="Insert Experience"
                                        value={formData.experience}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className='py-1 flex flex-col gap-3'>
                                    <label
                                        htmlFor="position"
                                        className="block text-sm font-medium text-textColor"
                                    >
                                        Position
                                    </label>
                                    <input
                                        type="text"
                                        id="position"
                                        className="bg-transparent border border-gray-600 text-white text-xs rounded block w-full p-2.5"
                                        placeholder="Insert Position"
                                        value={formData.position}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className='py-1 flex flex-col gap-3'>
                                    <label
                                        htmlFor="type"
                                        className="block text-sm font-medium text-textColor"
                                    >
                                        Type
                                    </label>
                                    <select
                                        id="type"
                                        className='bg-transparent border border-gray-600 text-white text-xs rounded block w-full p-2.5'
                                        value={formData.type}
                                        onChange={handleChange}
                                    >
                                        <option className='bg-elementsColor' value="Full Time">Full Time</option>
                                        <option className='bg-elementsColor' value="Part Time">Part Time</option>
                                        <option className='bg-elementsColor' value="Freelance">Freelance</option>
                                    </select>
                                </div>

                                <div className='py-1 flex flex-col gap-3'>
                                    <label
                                        htmlFor="status"
                                        className="block text-sm font-medium text-textColor"
                                    >
                                        Status
                                    </label>
                                    <select
                                        id="status"
                                        className='bg-transparent border border-gray-600 text-white text-xs rounded block w-full p-2.5'
                                        value={formData.status}
                                        onChange={handleChange}
                                    >
                                        <option className='bg-elementsColor' value="Active">Active</option>
                                        <option className='bg-elementsColor' value="New">New</option>
                                        <option className='bg-elementsColor' value="Close">Close</option>
                                    </select>
                                </div>

                                <div className='py-1 flex flex-col gap-3'>
                                    <label
                                        htmlFor="jobImg"
                                        className="block text-sm font-medium text-textColor flex items-center gap-2"
                                    >
                                        Job Image <FaUpload />
                                    </label>
                                    <div
                                        {...getRootProps()}
                                        className={`bg-transparent border border-gray-600 text-white text-xs rounded block w-full p-2.5 cursor-pointer ${isDragActive ? 'bg-gray-700' : ''}`}
                                    >
                                        <input {...getInputProps()} />
                                        {isDragActive ? (
                                            <p>Drop the files here ... </p>
                                        ) : (
                                            <p>Drag & Drop some files here, or click to select files</p>
                                        )}
                                    </div>
                                    {formData.jobImg && (
                                        <img src={formData.jobImg} alt="Job" className="mt-2 max-h-48 object-contain" />
                                    )}
                                </div>

                                <div className="flex justify-end gap-4 mt-4">
                                    <button
                                        type="submit"
                                        className="text-white bg-[#34C38F] hover:bg-[#2a9970] transition font-medium rounded text-sm px-3 py-2"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            <ToastContainer />
        </>
    );
};

export default Modal;
