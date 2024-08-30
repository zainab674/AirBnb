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
                <div className="container ">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="col-span-1 text-left">
                            <h3 className="text-sm font-medium mb-2">Support</h3>
                            <ul className="text-sm space-y-2">
                                <li>Help Center</li>
                                <li>AirCover</li>
                                <li>Anti-discrimination</li>
                                <li>Disability support</li>
                                <li>Cancellation options</li>
                                <li>Report neighborhood concern</li>
                            </ul>
                        </div>
                        <div className="col-span-1 text-left">
                            <h3 className="text-sm font-medium mb-2">Hosting</h3>
                            <ul className="text-sm space-y-2">
                                <li>Airbnb your home</li>
                                <li>AirCover for Hosts</li>
                                <li>Hosting resources</li>
                                <li>Community forum</li>
                                <li>Hosting responsibly</li>
                                <li>Airbnb-friendly apartments</li>
                                <li>Join a free Hosting class</li>
                            </ul>
                        </div>
                        <div className="col-span-1 text-left">
                            <h3 className="text-sm font-medium mb-2">Airbnb</h3>
                            <ul className="text-sm space-y-2">
                                <li>Newsroom</li>
                                <li>New features</li>
                                <li>Careers</li>
                                <li>Investors</li>
                                <li>Gift cards</li>
                                <li>Airbnb.org emergency stays</li>
                            </ul>
                        </div>
                    </div>

                    <hr className="w-full border border-t-gray-200 my-4" />
                    <div className="mt-8 mb-10 flex flex-col md:flex-row justify-between items-center text-sm">
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
                            <FaFacebookSquare className="text-xl font-extralight" />
                            <FaTwitterSquare className="text-xl font-extralight" />
                            <FaInstagramSquare className="text-xl font-extralight" />
                        </div>
                    </div>
                </div>
            </footer>

        </>

    );
};

export default Footer;