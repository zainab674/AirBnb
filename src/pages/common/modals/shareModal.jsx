import React, { useRef, useState, useEffect } from 'react';

import { FaCopy, FaFacebook, FaTwitter, FaEnvelope, FaSms } from 'react-icons/fa';
import { IoLogoWhatsapp, IoEllipsisHorizontal } from 'react-icons/io5';
import { AiOutlineClose } from 'react-icons/ai';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




const ShareModal = ({ isOpen, onClose, selectedLocation }) => {
    if (!isOpen) return null;

    console.log("sssssss", selectedLocation)
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 hidden md:flex justify-center items-center z-50">
            <div className="bg-white rounded-lg w-7/12 p-6 text-left">
                {/* Close Button */}

                <button className="text-gray-600 mb-4 hover:text-gray-900" onClick={onClose}>
                    <AiOutlineClose size={19} />
                </button>

                {/* Title */}
                <h1 className="text-2xl font-semibold mb-4 text-left">Share this experience</h1>

                {/* Location Details */}
                <div className="flex items-center mb-4">
                    <img
                        src={selectedLocation.image}
                        alt={selectedLocation.title}
                        className="w-12 h-12 rounded-lg mr-4"
                    />
                    <p className="font-medium">{selectedLocation.title}</p>
                </div>

                {/* Sharing Options */}
                <div className="grid grid-cols-2 gap-4">
                    <button className="flex items-center justify-start font-medium bg-gray-100 hover:bg-gray-200 p-3 rounded-lg">
                        <FaCopy className="mr-2" />
                        Copy Link
                    </button>
                    <button className="flex items-center justify-start font-medium bg-gray-100 hover:bg-gray-200 p-3 rounded-lg">
                        <FaEnvelope className="mr-2" />
                        Email
                    </button>
                    <button className="flex items-center justify-start font-medium bg-gray-100 hover:bg-gray-200 p-3 rounded-lg">
                        <FaSms className="mr-2" />
                        Messages
                    </button>
                    <button className="flex items-center justify-start font-medium bg-gray-100 hover:bg-gray-200 p-3 rounded-lg">
                        <IoLogoWhatsapp className="mr-2" />
                        WhatsApp
                    </button>
                    <button className="flex items-center justify-start font-medium bg-gray-100 hover:bg-gray-200 p-3 rounded-lg">
                        <FaFacebook className="mr-2" />
                        Massenger
                    </button>
                    <button className="flex items-center justify-start font-medium bg-gray-100 hover:bg-gray-200 p-3 rounded-lg">
                        <FaFacebook className="mr-2" />
                        Facebook
                    </button>
                    <button className="flex items-center justify-start font-medium bg-gray-100 hover:bg-gray-200 p-3 rounded-lg">
                        <FaTwitter className="mr-2" />
                        Twitter
                    </button>
                    <button className="flex items-center justify-start font-medium bg-gray-100 hover:bg-gray-200 p-3 rounded-lg ">
                        <IoEllipsisHorizontal className="mr-2" />
                        More options
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShareModal;