import React, { useState } from 'react';
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';
import LoginModal from '../../common/modals/loginModal';
import { apiConst } from './../../../constants/api.constants';
import WishList from '../modals/wishList';
const FixedFooter = () => {
    const navigate = useNavigate();
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setWishOpen(false);
        setModalOpen(true);
    };
    const closeModal = () => {

        setModalOpen(false);
    };


    const [isWishOpen, setWishOpen] = useState(false);
    const openWish = () => {
        setModalOpen(false);
        setWishOpen(true);
    };
    const closeWish = () => {

        setWishOpen(false);
    };
    const handleHome = () => {
        setModalOpen(false);
        setWishOpen(false);
        navigate(apiConst.home);
    }

    return (
        <>
            <footer className="fixed bottom-0 left-0 w-full bg-white text-gray-600 flex justify-center items-center py-3 shadow-lg z-50">
                <div className={`flex flex-col items-center mx-4 ${isModalOpen ? "text-gray-600" : isWishOpen ? "text-gray-600" : "text-red-500"}`}>
                    <HiMagnifyingGlass className="text-2xl "
                        onClick={handleHome}
                    />
                    <span className="mt-1 text-sm"

                    >Explore</span>
                </div>
                <div className={`flex flex-col items-center mx-1 ${isWishOpen ? "text-red-500" : "text-gray-600"}`}>
                    <IoIosHeartEmpty className="text-2xl"
                        onClick={() => openWish()} />
                    <span className="mt-1 text-sm">Wishlist</span>
                </div>


                <div className={`flex flex-col items-center mx-4 ${isModalOpen ? "text-red-500" : "text-gray-600"} `}>
                    <IoPersonCircleOutline className="text-2xl"
                        onClick={() => openModal()}
                    />
                    <span className="mt-1 text-sm"
                        on
                    >Login</span>
                </div>
            </footer>
            <LoginModal
                isOpen={isModalOpen}
                onClose={closeModal}

            />
            <WishList
                isOpen={isWishOpen}
                onClose={closeWish}


            />
        </>
    );
};

export default FixedFooter;
