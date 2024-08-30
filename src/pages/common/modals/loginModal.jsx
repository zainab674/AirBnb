
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';


function LoginModal({ isOpen, onClose, }) {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-40">
            <div className="bg-white rounded-lg shadow-lg lg:w-6/12 w-full p-6 lg:max-h-[80vh] h-full overflow-y-auto">
                {/* Close Button */}
                <div className='flex justify-center'>
                    <button className="text-gray-600 mb-4 hover:text-gray-900 hidden md:block" onClick={onClose}>
                        <AiOutlineClose size={19} />
                    </button>
                    <h2 className="text-center text-xl font-bold mb-4 lg:ml-60">Log in or sign up</h2>

                </div>
                <hr className='border border-t-gray-300 w-full mb-4' />

                <h3 className=" text-2xl font-normal text-left mb-6">Welcome to Airbnb</h3>

                <div className="border rounded-lg p-2 flex items-center mb-4">
                    <select className="text-sm text-gray-700 focus:outline-none border-none bg-transparent">
                        <option value="+92">Pakistan (+92)</option>
                        <option value="+1">USA (+1)</option>
                        <option value="+44">UK (+44)</option>
                        {/* Add more options as needed */}
                    </select>
                </div>

                <input
                    type="tel"
                    placeholder="Phone number"
                    className="w-full border rounded-lg p-2 mb-4 text-sm text-gray-700 focus:outline-none"
                />

                <p className="text-xs text-gray-500 mb-6">
                    We’ll call or text you to confirm your number. Standard message and data rates apply.{' '}
                    <a href="#" className="underline">
                        Privacy Policy
                    </a>.
                </p>

                <button className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white text-lg font-semibold py-2 rounded-lg mb-4 focus:outline-none">
                    Continue
                </button>

                <div className="flex items-center my-6">
                    <hr className="flex-grow border-gray-300" />
                    <span className="mx-2 text-sm text-gray-500">or</span>
                    <hr className="flex-grow border-gray-300" />
                </div>

                <button className="w-full flex items-center justify-center border rounded-lg py-2 mb-4 focus:outline-none">
                    <img
                        src="https://img.icons8.com/color/48/000000/facebook-new.png"
                        alt="Facebook"
                        className="w-5 h-5 mr-2"
                    />
                    Continue with Facebook
                </button>

                <button className="w-full flex items-center justify-center border rounded-lg py-2 mb-4 focus:outline-none">
                    <img
                        src="https://img.icons8.com/color/48/000000/google-logo.png"
                        alt="Google"
                        className="w-5 h-5 mr-2"
                    />
                    Continue with Google
                </button>

                <button className="w-full flex items-center justify-center border rounded-lg py-2 mb-4 focus:outline-none">
                    <img
                        src="https://img.icons8.com/ios-filled/50/000000/mac-os.png"
                        alt="Apple"
                        className="w-5 h-5 mr-2"
                    />
                    Continue with Apple
                </button>

                <button className="w-full flex items-center justify-center border rounded-lg py-2 focus:outline-none">
                    <img
                        src="https://img.icons8.com/material-outlined/48/000000/email.png"
                        alt="Email"
                        className="w-5 h-5 mr-2"
                    />
                    Continue with email
                </button>
            </div>
        </div>
    );
}

export default LoginModal;
