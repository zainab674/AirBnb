import React, { useEffect, useRef, useState } from 'react';

import { RiGlobalLine } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { CiMail } from "react-icons/ci";
import { useParams } from 'react-router-dom';


import GuestSelectionModal from '../modals/guestModal';
import { useNavigate } from 'react-router-dom';


import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import Cards from './../../../objects/cards'
import ButtonDateRangePicker from '../modals/dateRange';



function ConfirmAndPay() {
    const { id } = useParams();
    const foundCard = Cards.find(c => c.id == id);

    const [card, setCard] = useState(foundCard);
    const navigate = useNavigate();
    useEffect(() => {
        console.log("Cards array:", Cards);
        console.log("ID:", id);

        const foundCard = Cards.find(c => c.id == id);
        console.log("Found Card:", foundCard);
        setCard(foundCard);
    }, [id, Cards]);



    const numberOfNights = 5; // or any dynamic value
    const totalPrice = card ? (card.price * numberOfNights).toFixed(2) : 0;
    const specialOffer = 882.14; // Example special offer
    const taxes = 635.14; // Example taxes

    const totalAfterDiscount = (totalPrice - specialOffer).toFixed(2);
    const finalTotal = (parseFloat(totalAfterDiscount) + taxes).toFixed(2);



    const [isModalOpen, setIsModalOpen] = useState(false);
    const [totalGuests, setTotalGuests] = useState(1); // Default to 1 guest

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleSave = (totalGuests) => {
        setTotalGuests(totalGuests);
        closeModal();
    };




    const [open, setOpen] = useState(false);
    const [value, setValue] = useState([null, null]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>




            <div className="flex flex-col md:flex-row justify-between mt-10 p-6 md:p-12 ">
                {/* Left Section */}
                <div className=" md:w-6/12 w-full space-y-6 mr-10">
                    {/* Special Offer */}
                    <div className="border rounded-lg p-4 flex justify-between items-center ">
                        <div>
                            <p className="text-black text-left font-semibold">Special offer: save $882.</p>
                            <p className="text-sm">This Host is offering a deal on their first 3 bookings.</p>
                        </div>
                        <div className="text-pink-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>

                    {/* Your Trip */}
                    <div className="border rounded-lg p-6 space-y-4">
                        <h2 className="text-xl font-semibold text-left">Your trip</h2>
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="font-medium text-left">Dates</p>
                                <p className="text-gray-700">Sep 1 – 6</p>
                            </div>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <ButtonDateRangePicker
                                    label={
                                        value[0] === null && value[1] === null
                                            ? null
                                            : value
                                                .map((date) => (date ? date.format('MM/DD/YYYY') : 'null'))
                                                .join(' - ')
                                    }
                                    value={value}
                                    onChange={(newValue) => setValue(newValue)}
                                />
                            </LocalizationProvider>
                        </div>
                        <hr />
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="font-medium text-left">Guests</p>
                                <GuestSelectionModal
                                    isOpen={isModalOpen}
                                    handleClose={closeModal}
                                    onSave={handleSave}
                                />
                                <p>Total Guests: {totalGuests}</p>
                            </div>
                            <a href="#" className="text-black font-normal mr-3 underline " onClick={openModal}>EDIT</a>
                        </div>

                    </div>







                </div>

                {/* Right Section */}
                <div className=" md:ml-10 md:sticky  lg:w-1/3 lg:fixed lg:right-40  w-full mx-auto">
                    <div className="border border-gray-300 rounded-lg p-6 space-y-6">
                        <div className="flex space-x-4">
                            <img
                                src={card.image}
                                alt="Property"
                                className="w-24 h-24 rounded-lg"
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-left">{card.title}</h3>
                                <p className="text-gray-700 text-left">Entire villa</p>
                            </div>
                        </div>

                        <hr className='text-gray-500 my-10' />

                        <div className="space-y-2">
                            <div className="flex justify-between text-gray-700">
                                <p>${card ? card.price : 0} x {numberOfNights} nights</p>
                                <p>${totalPrice}</p>
                            </div>
                            <div className="flex justify-between text-green-700">
                                <p>Special offer</p>
                                <p>-${specialOffer}</p>
                            </div>
                            <div className="flex justify-between text-gray-700">
                                <p>Taxes</p>
                                <p>${taxes}</p>
                            </div>
                        </div>

                        <hr />

                        <div className="flex justify-between text-lg font-medium text-gray-900">
                            <p>Total (USD)</p>
                            <p>${finalTotal}</p>
                        </div>
                    </div>
                </div>
            </div>














        </>
    );
};

export default ConfirmAndPay;
