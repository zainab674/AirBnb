import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";
import { IoIosHeart } from 'react-icons/io';
import dayjs from 'dayjs';

import ShareModal from '../../../common/modals/shareModal';
import Image from '../../modals/Image';
import { IoIosArrowBack } from "react-icons/io";
import Cards from '../../../../objects/cards';

function DesktopCard() {

    const { id } = useParams();
    const foundCard = Cards.find(c => c.id == id);

    const [card, setCard] = useState(foundCard);



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

    useEffect(() => {
        // Fetch card details based on the ID
        const foundCard = Cards.find(c => c.id == id);
        setCard(foundCard);
    }, [id]);

    if (!card) return <div>Loading...</div>;
    return (
        <div className='hidden md:block '>


            <div className="p-4 px-16">
                <div className='flex justify-between'>
                    <h1 className="text-2xl font-medium mb-5 text-left">{card.title}</h1>
                    <div className='flex justify-center'>
                        <p className='inline-flex mx-2' onClick={() => openModal(card)}>
                            <MdOutlineFileUpload className='text-2xl mr-1' />
                            <span className='underline'>Share</span>
                        </p>
                        <p className='inline-flex mx-2' onClick={() => toggleHeart(card.id)}>
                            {toggledHearts[card.id] ?
                                <IoIosHeart className='text-lg mt-1 text-red-500 mr-1' /> :
                                <FaRegHeart className='text-lg mt-1 mr-1' />}
                            <span className='underline'>Save</span>
                        </p>
                    </div>
                </div>

                {selectedLocation && (
                    <ShareModal
                        isOpen={isModalOpen}
                        onClose={closeModal}
                        selectedLocation={selectedLocation}
                    />
                )}
                <div className="grid grid-cols-3 gap-4 h-auto w-full" id='photos'>
                    {/* Large Image */}
                    <div className="col-span-2">
                        <img
                            src={card.images[0]}
                            alt="Large Image"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Smaller Images */}
                    <div className="grid grid-rows-2 gap-4">
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src={card.images[1]}
                                alt="Small Image 1"
                                className="w-full h-full object-cover"
                            />
                            <img
                                src={card.images[2]}
                                alt="Small Image 2"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src={card.images[3]}
                                alt="Small Image 3"
                                className="w-full h-full object-cover"
                            />
                            <img
                                src={card.images[4]}
                                alt="Small Image 4"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );

}


function MobileCard() {

    const { id } = useParams();
    const foundCard = Cards.find(c => c.id == id);
    const navigate = useNavigate();
    const [card, setCard] = useState(foundCard);


    const handleClick = () => {
        navigate(-1);
    };




    const [toggledHearts, setToggledHearts] = useState({});


    const toggleHeart = (id) => {
        setToggledHearts((prevState) => ({
            ...prevState,
            [id]: !prevState[id], // Toggle the heart state for this location
        }));
    };

    useEffect(() => {
        // Fetch card details based on the ID
        const foundCard = Cards.find(c => c.id == id);
        setCard(foundCard);
    }, [id]);

    if (!card) return <div>Loading...</div>;
    return (
        <div className="max-w-md mx-auto bg-white  overflow-hidden block md:hidden">
            {/* Image Section */}
            <div className="relative">
                <Image
                    images={card.images}
                    title={card.title}


                />
                {/* <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-sm px-2 py-1 rounded">
                    1 / 5
                </div> */}
            </div>
            {/* Live Badge */}

            <div className="absolute top-6 left-6 bg-white text-black rounded-full p-1 text-xl">
                <IoIosArrowBack
                    onClick={handleClick}
                />
            </div>



            {/* Share Icon */}

            <div className="absolute top-6 right-20 bg-white text-black rounded-full p-1 text-xl" >
                <MdOutlineFileUpload />
            </div>


            <div
                className={`absolute top-6 right-6 bg-white text-black rounded-full p-1 text-xl cursor-pointer ${toggledHearts[card.id] ? 'text-red-500' : 'text-black'}`}
                onClick={() => toggleHeart(card.id)}
            >
                {toggledHearts[card.id] ? <IoIosHeart /> : <FaRegHeart />}
            </div>

            {/* Text Section */}
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                    {card.title}
                </h3>

            </div>
        </div>


    );
};










function Images() {
    return (
        <>
            <DesktopCard />
            <MobileCard />
        </>
    )
}

export default Images;
