import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiGlobalLine } from "react-icons/ri";
import { IoPersonCircle, IoReorderThreeSharp } from "react-icons/io5";
import { AiOutlineSearch } from 'react-icons/ai';
import airbnb from './../../../assets/airbnb.png';
import LoginModal from './../../common/modals/loginModal'
import Search from './search';
import NavModal from "./../modals/navModal"
import { apiConst } from './../../../constants/api.constants';
import { is } from 'date-fns/locale';


function DesktopComponent() {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    const [isRegion, setIsRegion] = useState(false);
    const [isGuest, setIsGuest] = useState(false);
    const [isStay, setIsStay] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const anywhere = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        setIsRegion(true);
    }
    const guest = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        setIsGuest(true);
    }
    const anyweek = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })

    }
    const navigate = useNavigate();
    const dropdownRef = useRef(null);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const toggleSidebar = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 1);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [dropdownRef]);

    return (
        <>
            <div className={` hidden md:flex space-x-2 lg:space-x-7  pr-4 pl-4 lg:pl-10 lg:pr-10 bg-white  justify-between items-center mt-0 top-0 pt-6 fixed w-full z-50`}>
                <div className="flex items-center pl-4">
                    <img src={airbnb} alt="Airbnb Logo" className="w-25 h-8 md:w-25 md:h-9 cursor-pointer" onClick={() => navigate(apiConst.home)} />
                </div>
                {!scrolled &&

                    <div >

                        <div className="ml-4 lg:ml-16 flex items-center">
                            <ul className="flex text-gray-700 space-x-4 lg:space-x-6">
                                <li className={isStay ? "text-black" : ""}>
                                    <a href="#" onClick={() => setIsStay(true)}>Stays</a>
                                </li>
                                <li className={!isStay ? "text-black" : ""}>
                                    <a href="#" onClick={() => setIsStay(false)}>Experiences</a>
                                </li>
                            </ul>
                        </div>



                    </div>}


                {scrolled &&
                    <>
                        <div className="flex items-center border rounded-full shadow-sm px-4 py-2 ml-20">
                            <button className="text-gray-600 px-4" onClick={anywhere} >Anywhere</button>
                            <span className="border-l h-6"></span>
                            <button className="text-gray-600 px-4" onClick={anyweek} >Any week</button>
                            <span className="border-l h-6"></span>
                            <button className="text-gray-600 px-4" onClick={guest} >Add guests</button>
                            <button className="ml-4 bg-red-500 text-white p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-3a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </div>
                    </>
                }

                <div className="flex space-x-2 lg:space-x-6 items-center pr-2 lg:pr-5">
                    <div className="hidden md:block">
                        <button className="text-black font-medium py-2 rounded-md text-sm" onClick={() => navigate(apiConst.landing)}>
                            Airbnb your home
                        </button>
                    </div>
                    <div className="flex items-center">
                        <button className="text-black hover:text-gray-700">
                            <RiGlobalLine className="text-xl font-extralight" />
                        </button>
                    </div>
                    <div className="relative">
                        <button
                            className="rounded-full px-3 py-1 flex items-center border border-gray-300 hover:shadow-2xl"
                            onClick={toggleSidebar}
                        >
                            <IoReorderThreeSharp className="text-2xl text-black pt-1" />
                            <IoPersonCircle className="text-4xl text-gray-500" />
                        </button>

                        {isOpen && (
                            <div
                                ref={dropdownRef}
                                className="absolute top-10 right-6 mt-2 bg-white border border-gray-300 shadow-lg text-black w-64 transition-transform duration-300 ease-in-out rounded-lg"
                            >
                                <ul className="text-left pt-0">
                                    <li className="mb-2">
                                        <a href="#" className="block text-sm py-2 px-4 rounded hover:bg-gray-200" onClick={() => openModal()}>
                                            Log in
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="block text-sm py-2 px-4 rounded hover:bg-gray-200" onClick={() => openModal()}>
                                            Sign up
                                        </a>
                                    </li>
                                    <hr className="border-t border-gray-300" />
                                    <li className="mb-2">
                                        <a href="#" className="block text-sm py-2 px-4 rounded hover:bg-gray-200">Gift Cards</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="block text-sm py-2 px-4 rounded hover:bg-gray-200">Airbnb Your Home</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="block text-sm py-2 px-4 rounded hover:bg-gray-200">Help Center</a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
                <LoginModal
                    isOpen={isModalOpen}
                    onClose={closeModal}

                />
            </div>

            <Search isStay={isStay} isG={isGuest} isR={isRegion} setG={setIsGuest} setR={setIsRegion} />
        </>

    );
}

function MobileComponent() {

    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <>
            <div className="md:hidden block  fixed z-30 top-0 bg-white w-full"
                onClick={openModal}
            >
                <div className=" flex items-center text-gray-700 border border-gray-300 rounded-3xl p-3 m-4 lg:mx-4 ">
                    <AiOutlineSearch className="text-3xl text-black mt-1 mr-2" />
                    <div>
                        <p className="font-medium text-sm  text-black">Where to?</p>
                        <p className="text-xs">AnyWhere · Anyweek · Add Guest</p>
                    </div>
                </div>
            </div>
            <NavModal
                isOpen={isModalOpen}
                onClose={closeModal}

            />
        </>
    )
};


const Navbar = () => {
    return (
        <>
            <DesktopComponent />
            <MobileComponent />


        </>
    );
};

export default Navbar;
