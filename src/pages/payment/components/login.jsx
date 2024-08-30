import React, { useEffect, useRef, useState } from 'react';


import { FcGoogle } from "react-icons/fc";
import { CiMail } from "react-icons/ci";




function Login() {

    return (

        < div className="flex flex-col items-center justify-center p-6 lg:w-1/2 w-full" >
            <h2 className="text-2xl font-semibold mb-4">Log in or sign up to book</h2>

            <div className="w-full  space-y-4">
                {/* Country Code and Phone Number Input */}
                <div className="border rounded-lg p-4">
                    <label className="block text-sm text-gray-700 mb-1 text-left" htmlFor="countryCode">Country code</label>
                    <select
                        id="countryCode"
                        className="w-full border-b mb-4 py-2 focus:outline-none focus:border-pink-500"
                    >
                        <option value="+92">Pakistan (+92)</option>
                        {/* Add more country codes as needed */}
                    </select>
                    <input
                        type="tel"
                        placeholder="Phone number"
                        className="w-full py-2 border-none focus:outline-none focus:ring-0"
                    />
                </div>

                <p className="text-sm text-gray-500">
                    We'll call or text you to confirm your number. Standard message and data rates apply. <a href="#" className="text-gray-700 underline">Privacy Policy</a>
                </p>

                {/* Continue Button */}
                <button className="w-full py-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-lg text-lg font-semibold">
                    Continue
                </button>

                {/* Divider */}
                <div className="flex items-center justify-between space-x-4">
                    <hr className="w-full border-gray-300" />
                    <span className="text-gray-500">or</span>
                    <hr className="w-full border-gray-300" />
                </div>

                {/* Social Login Buttons */}
                <div className="flex space-x-4">
                    <button className="flex-1 py-3 border border-gray-500 rounded-lg flex items-center justify-center space-x-2">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="w-5 h-5" />
                    </button>
                    <button className="flex-1 py-3 border border-gray-500 rounded-lg flex items-center justify-center space-x-2">
                        <FcGoogle />
                    </button>
                    <button className="flex-1 py-3 border border-gray-500 rounded-lg flex items-center justify-center space-x-2">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="w-5 h-5" />
                    </button>
                </div>

                {/* Continue with Email */}
                <button className="w-full py-3 mt-4 border border-gray-500 rounded-lg flex items-center justify-evenly space-x-2 text-gray-700 font-medium">
                    <CiMail className='text-2xl' />
                    <span>Continue with email</span>
                </button>
            </div>
        </div>
    )



}

export default Login;