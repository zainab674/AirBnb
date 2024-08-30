import React, { useEffect, useRef, useState } from 'react';
import LoginModal from '../../common/modals/loginModal';







function WishList({ isOpen, onClose }) {
    if (!isOpen) return null;

    const [isLoginOpen, setLoginOpen] = useState(false);

    const openLogin = () => {

        setLoginOpen(true);
    };
    const closeLogin = () => {

        setLoginOpen(false);
    };






    return (
        <div>

            <div className="fixed inset-0 flex items-center justify-center z-40">
                {/* Modal Overlay */}
                <div
                    className="absolute inset-0 bg-black opacity-50"
                    onClick={onClose}
                ></div>

                {/* Modal Content */}
                <div className="relative bg-white rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/2 p-6 h-full">
                    {/* Close Button */}
                    <button
                        className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
                        onClick={onClose}
                    >
                        &times;
                    </button>

                    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold mb-4">Wishlists</h1>
                            <p className="text-lg text-gray-500 mb-6">
                                Log in to view your wishlists
                                <br />
                                You can create, view, or edit wishlists once you’ve logged in.
                            </p>
                            <button className="px-6 py-3 bg-pink-500 text-white text-lg font-medium rounded-md hover:bg-pink-600 transition duration-300"
                                onClick={() => openLogin()}
                            >

                                Log in
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            <LoginModal
                isOpen={isLoginOpen}
                onClose={closeLogin}
            />
        </div>
    );
};

export default WishList;
