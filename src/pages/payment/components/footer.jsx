import React from "react";
import { RiGlobalLine } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <hr className='w-full border border-t-gray-200 mb-4 mt-10' />
            <footer className="bg-gray-100 px-8 sm:px-10 md:px-16">

                <div className="mt-8 mb-10 flex  flex-col-reverse md:flex-row justify-between md:items-center text-sm">
                    <div className="flex flex-wrap space-x-4 mb-4 md:mb-0 text-left">
                        <p className="text-gray-800">&copy; 2024 Airbnb, Inc.</p>
                        <a href="#" className="text-gray-800 hover:text-gray-900">Terms</a>
                        <a href="#" className="text-gray-800 hover:text-gray-900">Sitemap</a>
                        <a href="#" className="text-gray-800 hover:text-gray-900">Privacy</a>
                        <a href="#" className="text-gray-800 hover:text-gray-900">Your Privacy Choices</a>
                    </div>
                    <div className="flex space-x-4 text-left">
                        <div className="flex items-center space-x-2">
                            <RiGlobalLine className="text-xl font-extralight" />
                            <span className="mr-2">English (US)</span>
                        </div>
                        <span className="mr-2">$ USD</span>

                    </div>
                </div>

            </footer>

        </>

    );
};

export default Footer;