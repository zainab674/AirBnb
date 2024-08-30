import React, { useState, useEffect } from 'react';
import logo from './../../../assets/logo.webp'
import sc from './../../../assets/sc.png'
import sc1 from './../../../assets/sc1.png'
import sc2 from './../../../assets/sc2.png'
import sc3 from './../../../assets/sc3.png'
import ReactDOM from 'react-dom';
import Demo from './demo';
import { AiOutlineSearch } from 'react-icons/ai';
import { TbHomePlus } from "react-icons/tb";
import { FaCheck } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import LoginModal from '../../common/modals/loginModal';
import { apiConst } from './../../../constants/api.constants';
function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div
                className="flex justify-between items-center py-4 mb-6 cursor-pointer border-t"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h2 className="text-2xl font-normal text-gray-900 ">{question}</h2>
                <span className="text-gray-500">{isOpen ? <IoIosArrowUp className='text-xl text-gray-800 font-bold ' /> : <IoIosArrowDown className='text-xl text-gray-800 font-bold ' />}</span>
            </div>
            {isOpen && <p className="text-gray-500 text-lg  font-normal text-left ">{answer}</p>}
        </div>
    );
}

const Landing = () => {
    const [nights, setNights] = useState(3);
    const pricePerNight = 36;
    const totalEarnings = nights * pricePerNight;
    const navigate = useNavigate();

    const faqs = [
        {
            question: "Is my place right for Airbnb?",
            answer: "Airbnb guests are interested in all kinds of places. We have listings for tiny homes, cabins, treehouses, and more. Even a spare room can be a great place to stay.",
        },
        {
            question: "Do I have to host all the time?",
            answer: "No, you can host whenever you like. You set your own schedule and availability.",
        },
        {
            question: "How much should I interact with guests?",
            answer: "It’s up to you. Some hosts like to greet guests in person, while others prefer to communicate through the app or phone.",
        },
        {
            question: "Any tips on being a great Airbnb Host?",
            answer: "Being a great host is all about hospitality. Make sure your place is clean, comfortable, and as described in your listing.",
        },
    ];
    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => {

        setModalOpen(true);
    };
    const closeModal = () => {

        setModalOpen(false);
    };

    return (
        <>
            <div className=" bg-white  flex justify-between  mt-0 top-0 pt-4 w-full fixed z-50">
                <div className="">
                    <img src={logo} alt="Airbnb Logo" className="w-20 h-14" onClick={() => navigate(apiConst.home)} />

                </div>



                <div className="flex space-x-6 mr-10">

                    <div className="hidden md:block">
                        <button className=" text-black font-medium  py-2 rounded-md "
                            onClick={() => navigate(apiConst.landing)}
                        >
                            Ready to Airbnb it?
                        </button>
                    </div>

                    <div className="relative pb-4">
                        {/* Button */}
                        <button
                            className="  rounded-md px-6 py-3  flex items-center bg-rose-500 font-medium  text-white border border-gray-300 hover:shadow-2xl"
                            onClick={() => openModal()}
                        >
                            <TbHomePlus />  Airbnb Setup
                        </button>


                    </div>
                </div>
            </div >
            <LoginModal
                isOpen={isModalOpen}
                onClose={closeModal}

            />
            <div className='flex justify-between mt-20'>

                <div className="flex flex-col items-center my-auto bg-white p-8  mx-auto h-screen rounded-lg shadow-md max-w-sm ">
                    <h1 className="text-pink-600 text-6xl font-bold mb-2">Airbnb it.</h1>
                    <p className="text-gray-900 text-6xl font-bold mb-2 whitespace-nowrap">You could earn</p>
                    <p className="text-gray-900 text-6xl font-bold mb-4">${totalEarnings}</p>
                    <p className="text-gray-500 mb-2">
                        <span className="text-black-500 underline">{nights} nights</span> at an estimated ${pricePerNight} a night
                    </p>
                    <input
                        type="range"
                        min="1"
                        max="30"
                        value={nights}
                        onChange={(e) => setNights(Number(e.target.value))}
                        className="w-full mb-4 "

                    />
                    <p className="text-blue-500 underline cursor-pointer mb-4">
                        Learn how we estimate your earnings
                    </p>
                    <div className="flex items-center space-x-2 text-gray-700 border border-gray-300 rounded-3xl w-full p-2 px-4">
                        <span className="material-icons text-red-500"> <AiOutlineSearch className="text-xl text-rose-600  mt-3" /></span>
                        <div>
                            <p className="font-semibold">Multan</p>
                            <p className="text-sm">Entire place · 2 bedrooms</p>
                        </div>
                    </div>
                </div>
                <div className='w-1/2'>
                    <Demo />
                </div>
            </div>


            <div>
                <h1 className='text-black text-4xl font-semibold text-center mt-24'>Airbnb it easily with Airbnb setup</h1>
                <img src={sc} alt="" className='w-full h-auto' />
            </div>

            <div className='flex justify-evenly text-center  items-center  mt-14'>
                <div className='w-1/2'>
                    <h1 className='font-medium  '>One-to-one guidance from a Superhost </h1>
                    <p className='mx-8 text-gray-700 '>We’ll match you with a Superhost in your area, who’ll guide you from your first question to your first guest—by phone, video call, or chat.</p>
                </div>
                <div className='w-1/2'>
                    <h1 className='font-medium'>An experienced guest for your first booking </h1>
                    <p className='mx-8 text-gray-700'>For your first booking, you can choose to welcome an experienced guest who has at least three stays and a good track record on Airbnb.</p>
                </div>
                <div className='w-1/2'>
                    <h1 className='font-medium'>Specialized support from Airbnb</h1>
                    <p className='mx-8 text-gray-700'>New Hosts get one-tap access to specially trained Community Support agents who can help with everything from account issues to billing support.</p>
                </div>
            </div>

            <div>
                <h1 className='text-gray-900 text-4xl font-bold text-center mt-24'>Need a place where you can host?</h1>
                <h1 className='text-gray-900 text-4xl font-bold text-center mt-2'>Try Airbnb-friendly apartments</h1>
                <div className='flex justify-center items-center mt-12'>
                    <div className='mx-2' >
                        <img src={sc1} alt="" className=' w-72 rounded-2xl' />
                        <p className='text-sm text-gray-700'>
                            <span className='font-medium'>Nani</span>
                            <br />
                            Resident & Host Dallas, TX
                        </p>
                    </div>
                    <div className='mx-2'>
                        <img src={sc2} alt="" className=' w-72 rounded-2xl' />
                        <p className='text-sm text-gray-700'>
                            <span className='font-medium'>Jeff and Amador</span>
                            <br />
                            Residents & Hosts San Diego, CA
                        </p>
                    </div>
                    <div className='mx-2'>
                        <img src={sc3} alt="" className=' w-72 rounded-2xl' />
                        <p className='text-sm text-gray-700'>
                            <span className='font-medium'>Buddy</span>
                            <br />
                            Resident & Host Denver, CO
                        </p>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <p className='text-xl mx-16 px-16 mt-14 text-center'>
                        We’ve partnered with apartment buildings across the US so you can rent a place to live and host on Airbnb part-time. The typical host earned $3650/year and hosted 28 nights. *
                    </p>
                    <p className='text-xs mx-16 px-16 mt-14 text-center'>
                        *The typical Host earnings amount represents the median amount of earnings for Hosts in US Airbnb-friendly apartment buildings between Jan 1 - Dec 31, 2023, according to internal Airbnb data for revenue earned by Hosts.
                    </p>
                    <button className="text-black border border-black text-sm px-4 py-2 mt-10 mb-20 rounded-md">
                        Explore Cities
                    </button>
                </div>

            </div>


            <div className="max-w-3xl mx-auto p-4">
                <header className="text-center mb-8">
                    <h1 className="text-5xl font-bold text-black">
                        <span className="text-rose-500">air</span>cover
                    </h1>
                    <p className="text-black mb-4 ">for Hosts</p>
                    <h2 className="text-4xl font-bold text-gray-800 mt-2">
                        Airbnb it with top-to-bottom protection
                    </h2>
                </header>

                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <table className="min-w-full text-left border-collapse w-full">
                        <thead>
                            <tr className="bg-gray-100 ">
                                <th className="py-3 px-4 pb-8 font-semibold text-gray-600"></th>
                                <th className="py-3 px-4 pb-8  text-2xl font-normal text-black">Airbnb</th>
                                <th className="py-3 px-4 pb-8  text-2xl font-normal text-black">Competitors</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Row 1 */}
                            <tr className=" border-t-2 border-gray-300 ">
                                <td className="py-3 px-4 ">
                                    <p className="font-semibold text-2xl text-gray-900 mb-4">Guest identity verification</p>
                                    <p className="text-gray-600 pb-8  ">
                                        Our comprehensive verification system checks details such as name, address, government ID, and more to confirm the identity of guests who book on Airbnb.
                                    </p>
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <FaCheck className="text-green-600 text-2xl mx-auto font-bold" />
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <FaCheck className="text-green-600 text-2xl mx-auto font-bold" />
                                </td>
                            </tr>
                            {/* Row 2 */}
                            <tr className=" border-t-2 border-gray-300 ">
                                <td className="py-3 px-4">
                                    <p className="font-semibold text-2xl text-gray-900 mb-4">Reservation screening</p>
                                    <p className="text-gray-600 pb-8  ">
                                        Our proprietary technology analyzes hundreds of factors in each reservation and blocks certain bookings that show a high risk for disruptive parties and property damage.
                                    </p>
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <FaCheck className="text-green-600 text-2xl mx-auto font-bold" />
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <span className="text-red-500 font-bold">❌</span>
                                </td>
                            </tr>
                            {/* Row 3 */}
                            <tr className=" border-t-2 border-gray-300">
                                <td className="py-3 px-4">
                                    <p className="font-semibold text-2xl text-gray-900 mb-4">$3M damage protection</p>
                                    <p className="text-gray-600 pb-8 ">
                                        Airbnb reimburses you for damage caused by guests to your home and belongings and includes these specialized protections:
                                    </p>

                                </td>
                                <td className="py-3 px-4 text-center">
                                    <FaCheck className="text-green-600 text-2xl mx-auto font-bold" />
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <span className="text-red-500 font-bold">❌</span>
                                </td>
                            </tr>
                            <tr className=" border-t-2 border-gray-300">
                                <td className="py-3 px-4">
                                    <p className="font-normal text-xl text-gray-900 mb-4">Art & valuables</p>


                                </td>
                                <td className="py-3 px-4 text-center">
                                    <FaCheck className="text-green-600 text-2xl mx-auto font-bold" />
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <span className="text-red-500 font-bold">❌</span>
                                </td>
                            </tr>
                            <tr className=" border-t-2 border-gray-300">
                                <td className="py-3 px-4">
                                    <p className="font-normal text-xl text-gray-900 mb-4">Auto & boat</p>

                                </td>
                                <td className="py-3 px-4 text-center">
                                    <FaCheck className="text-green-600 text-2xl mx-auto font-bold" />
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <span className="text-red-500 font-bold">❌</span>
                                </td>
                            </tr>
                            <tr className=" border-t-2 border-gray-300">
                                <td className="py-3 px-4">
                                    <p className="font-normal text-xl text-gray-900 mb-4">Pet damage</p>

                                </td>
                                <td className="py-3 px-4 text-center">
                                    <FaCheck className="text-green-600 text-2xl mx-auto font-bold" />
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <span className="text-red-500 font-bold">❌</span>
                                </td>
                            </tr>
                            <tr className=" border-t-2 border-gray-300">
                                <td className="py-3 px-4">
                                    <p className="font-normal text-xl text-gray-900 mb-4">Income loss</p>

                                </td>
                                <td className="py-3 px-4 text-center">
                                    <FaCheck className="text-green-600 text-2xl mx-auto font-bold" />
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <span className="text-red-500 font-bold">❌</span>
                                </td>
                            </tr>
                            <tr className=" border-t-2 border-gray-300">
                                <td className="py-3 px-4">
                                    <p className="font-normal text-xl text-gray-900 mb-4">Deep cleaning</p>

                                </td>
                                <td className="py-3 px-4 text-center">
                                    <FaCheck className="text-green-600 text-2xl mx-auto font-bold" />
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <span className="text-red-500 font-bold">❌</span>
                                </td>
                            </tr>
                            {/* Row 4 */}
                            <tr className=" border-t-2 border-gray-300">
                                <td className="py-3 px-4">
                                    <p className="font-semibold text-2xl text-gray-900 mb-4">$1M liability insurance</p>
                                    <p className="text-gray-600 pb-8">
                                        You're protected in the rare event that a guest gets hurt or their belongings are damaged or stolen.
                                    </p>
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <FaCheck className="text-green-600 text-2xl mx-auto font-bold" />
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <FaCheck className="text-green-600 text-2xl mx-auto font-bold" />
                                </td>
                            </tr>
                            {/* Row 5 */}
                            <tr className=" border-t-2 border-gray-300">
                                <td className="py-3 px-4">
                                    <p className="font-semibold text-2xl text-gray-900 mb-4">24-hour safety line</p>
                                    <p className="text-gray-600 pb-8">
                                        If you ever feel unsafe, our app provides one-tap access to specially-trained safety agents, day or night.
                                    </p>
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <FaCheck className="text-green-600 text-2xl mx-auto font-bold" />
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <span className="text-red-500 font-bold">❌</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className='text-gray-500  font-medium'>Comparison is based on public information and free offerings by top competitors as of 10/22. <span className='text-black underline cursor-pointer'>Find details and exclusions here.</span> </p>
                <div className="text-center mt-8">
                    <button className="px-6 py-2 border border-gray-800 text-gray-900 rounded-md font-medium  mb-16">
                        Learn more
                    </button>
                </div>
            </div>



            <div className=" mx-auto p-6 flex w-full justify-between">
                <div>
                    <h1 className="text-4xl font-medium text-gray-900   px-4 w-1/2 text-left whitespace-nowrap ml-4">Your questions,  </h1>
                    <h1 className="text-4xl font-medium text-gray-900 mb-6  px-4 w-1/2 text-left ml-4">  answered</h1>

                </div>
                <div className='w-1/2 px-5 '>
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Landing;