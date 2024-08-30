import React, { useState, useEffect } from 'react';
import airbnb from './../../../assets/airbnb.png';
import { RiGlobalLine } from "react-icons/ri";
import { IoPersonCircle } from "react-icons/io5";
import { IoReorderThreeSharp } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import LoginModal from '../../common/modals/loginModal';
import { useNavigate } from 'react-router-dom';
import { apiConst } from './../../../constants/api.constants';

const HostNavbar = ({ className }) => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => {

        setModalOpen(true);
    };
    const closeModal = () => {

        setModalOpen(false);
    };


    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    const handleClick = () => {
        navigate(-1); // Go back to the previous page
    };



    return (
        <>
            <div className={`hidden md:flex justify-between items-center p-4 lg:px-16 border-b ${className}`}>
                {/* Left: Airbnb Logo */}
                <div className="flex items-center space-x-2">
                    <img src={airbnb} alt="Airbnb Logo" className="w-25 h-9" onClick={() => navigate(apiConst.home)} />
                </div>



                {/* Right: User Menu */}
                <div className="flex space-x-6 mr-10 items-center">
                    <div className="hidden md:block">
                        <button className="text-black font-medium py-2 rounded-md" onClick={() => navigate(apiConst.landing)}>
                            Airbnb your home
                        </button>
                    </div>
                    <div className="flex">
                        <button className="text-black hover:text-gray-700">
                            <RiGlobalLine className='text-xl font-extralight' />
                        </button>
                    </div>
                    <div className="relative">
                        <button className="rounded-full px-3 py-1 flex items-center border border-gray-300 hover:shadow-2xl" onClick={toggleSidebar}>
                            <IoReorderThreeSharp className='text-2xl text-black pt-1' />
                            <IoPersonCircle className='text-4xl text-gray-500' />
                        </button>

                        {/* Conditionally Render Sidebar */}
                        {isOpen && (
                            <div className="absolute top-10 right-6 mt-2 bg-white border border-gray-300 shadow-lg text-black w-64 transition-transform duration-300 ease-in-out rounded-lg">
                                <div className="">
                                    <ul className='text-left pt-0'>
                                        <li className="mb-2">
                                            <a href="#" className="block py-2 px-4 rounded hover:bg-gray-200" onClick={() => openModal()}>Sign up</a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="#" className="block py-2 px-4 rounded hover:bg-gray-200" onClick={() => openModal()}>Log in</a>
                                        </li>
                                        <hr className='border-t border-gray-300' />
                                        <li className="mb-2">
                                            <a href="#" className="block py-2 px-4 rounded hover:bg-gray-200">Gift Cards</a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="#" className="block py-2 px-4 rounded hover:bg-gray-200">Airbnb Your Home</a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="#" className="block py-2 px-4 rounded hover:bg-gray-200">Help Center</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <LoginModal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                />
            </div>

            <div className='flex justify-start md:hidden w-full bg-white'>
                <IoIosArrowBack className='text-3xl mr-10  mt-5'
                    onClick={handleClick}
                />

            </div>
        </>

    );
};

export default HostNavbar;
