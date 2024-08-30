import React from 'react';
import airbnb from './../../../assets/airbnb.png'

import { IoIosArrowBack } from "react-icons/io";

import { useNavigate } from 'react-router-dom';


function PayNav() {
    const navigate = useNavigate();

    const handleClick = () => {
        console.log("hi")
        navigate(-1);
    };


    return (
        <>

            <div className="   fixed z-50 top-0 bg-white w-full">
                <div className=" flex items-center text-black  p-3 m-4 lg:mx-4 ">
                    <IoIosArrowBack className="text-xl md:text-2xl lg:text-3xl text-black  mr-2"
                        onClick={handleClick} />
                    <div>
                        <p className="font-medium md:text-2xl lg:text-xl  text-black">Confirm and pay</p>

                    </div>
                </div>
            </div>





        </>
    );
};

export default PayNav;
