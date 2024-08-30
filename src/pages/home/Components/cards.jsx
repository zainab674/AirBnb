import React, { useRef, useState, useEffect } from 'react';

import { FaRegHeart } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { IoIosHeart } from 'react-icons/io';


import Cards from '../../../objects/cards';
import ImageCarousel from '../modals/ImageCarousel';
import ShareModal from '../../common/modals/shareModal';
import { apiConst } from './../../../constants/api.constants';





function CardsContainer({ selectedCategory }) {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const openModal = (location) => {
        setSelectedLocation(location);
        setModalOpen(true);
    };
    const closeModal = () => {
        setSelectedLocation(null);
        setModalOpen(false);
    };


    const [toggledHearts, setToggledHearts] = useState({});


    const toggleHeart = (id) => {
        setToggledHearts((prevState) => ({
            ...prevState,
            [id]: !prevState[id], // Toggle the heart state for this location
        }));
    };


    const filteredLocations = Cards.filter(Cards =>
        Cards.type === selectedCategory

    );
    const PastLocations = Cards.filter(Cards =>
        Cards.past == true

    );

    const displayedLocations = filteredLocations;
    const navigate = useNavigate();

    const handleClick = (id) => {
        console.log("iddd", id)
        navigate(apiConst.card.replace(':id', id));
    };



    return (
        <>



            <ul className="flex  flex-wrap justify-start items-start py-4 lg:px-16 mt-36 lg:mt-20 md:mt-24 list-none mx-auto hover:cursor-pointer">
                {filteredLocations.map((location) => (
                    <li key={location.id} className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 p-2 mb-5 bg-white rounded-lg shadow-md">
                        {/* Image Carousel */}
                        <ImageCarousel
                            images={location.images}
                            title={location.title}
                            id={location.id}
                            handleClick={handleClick}
                        />
                        {/* Live Badge */}
                        {selectedCategory === "Icons" && location.live && (
                            <div className="absolute top-6 left-6 bg-white text-black text-sm font-bold px-3 py-2 cursor-pointer rounded-full" onClick={() => handleClick(location.id)}>
                                Live
                            </div>
                        )}
                        {selectedCategory !== "Icons" && location.fav && (
                            <div className="absolute top-6 left-6 bg-white text-black text-sm font-bold px-3 py-2 cursor-pointer rounded-full" onClick={() => handleClick(location.id)}>
                                Guest's Favorite
                            </div>
                        )}

                        {/* Share Icon */}
                        {selectedCategory === "Icons" && location.live && (
                            <div className="absolute top-6 right-6 bg-white text-black rounded-full p-2 text-2xl" onClick={() => openModal(location)}>
                                <MdOutlineFileUpload />
                            </div>
                        )}
                        {selectedCategory !== "Icons" && (
                            <div
                                className={`absolute top-6 right-6 rounded-full p-2 text-2xl cursor-pointer ${toggledHearts[location.id] ? 'text-red-500' : 'text-white'}`}
                                onClick={() => toggleHeart(location.id)}
                            >
                                {toggledHearts[location.id] ? <IoIosHeart /> : <FaRegHeart />}
                            </div>
                        )}

                        {/* Content */}
                        <div className="mt-4">
                            <h3 className="font-medium text-gray-900 whitespace-nowrap text-sm text-left">{location.title}</h3>
                            <p className="text-gray-600 text-left">Hosted by {location.host.name}</p>
                            <p className="text-gray-800 mt-2 font-medium text-left">
                                {location.isComingSoon ? `Coming ${location.coming}` : location.soldOut ? "Sold Out" : `$${location.price} per guest`}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>

            {selectedLocation && (
                <ShareModal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    selectedLocation={selectedLocation}
                />


            )}


            {selectedCategory == "Icons" ?
                <>
                    <h1 className="font-medium md:ml-5 ml:0 md:px-16 px-5 mt-5 text-2xl md:text-3xl text-left">Past experiences</h1>
                    <ul className="flex flex-wrap justify-start py-4 lg:px-16 list-none mx-auto">
                        {PastLocations.map((location) => (
                            <li key={location.id} className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 p-2 mb-5 bg-white rounded-lg shadow-md">
                                {/* Image */}
                                <ImageCarousel
                                    images={location.images}
                                    title={location.title}
                                    id={location.id}
                                    handleClick={handleClick}
                                />
                                {/* Live Badge */}
                                {location.live && (
                                    <div className="absolute top-6 left-6 bg-white text-black text-xs font-bold px-3 py-2 rounded-full">
                                        Live
                                    </div>
                                )}
                                {/* Share Icon */}
                                <div className="absolute top-6 right-6 bg-white text-black rounded-full p-2 text-2xl cursor-pointer" onClick={() => openModal(location)}>
                                    <MdOutlineFileUpload />
                                </div>
                                {/* Content */}
                                <div className="mt-4">
                                    <h3 className="font-medium text-sm text-gray-900 whitespace-nowrap text-left">{location.title}</h3>
                                    <p className="text-gray-600 text-left">Hosted by {location.host.name}</p>
                                    <p className="text-gray-800 mt-2 font-medium text-left">
                                        {location.isComingSoon ? `Coming ${location.coming}` : location.soldOut ? "Sold Out" : `$${location.price} per guest`}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>

                </>
                :
                ""
            }


        </>
    );
}







export default CardsContainer;
// export { Menu, Cards };
