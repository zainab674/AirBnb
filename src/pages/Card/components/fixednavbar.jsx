

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Cards from './../../../objects/cards';
import { useNavigate } from 'react-router-dom';
import { apiConst } from '../../../constants/api.constants';


function FixedNav() {

    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 860) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const { id } = useParams();
    const foundCard = Cards.find(c => c.id == id);

    const [card, setCard] = useState(foundCard);

    useEffect(() => {
        // Fetch card details based on the ID
        const foundCard = Cards.find(c => c.id == id);
        setCard(foundCard);
    }, [id]);

    const scrollToPhotos = () => {
        const amenitiesSection = document.getElementById('photos');
        if (amenitiesSection) {
            amenitiesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToAmenities = () => {
        const amenitiesSection = document.getElementById('amenities');
        if (amenitiesSection) {
            amenitiesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToReviews = () => {
        const amenitiesSection = document.getElementById('reviews');
        if (amenitiesSection) {
            amenitiesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToLocation = () => {
        const amenitiesSection = document.getElementById('location');
        if (amenitiesSection) {
            amenitiesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };


    const payment = (id) => {
        console.log("iddd", id)
        navigate(apiConst.payment.replace(':id', id));
    };

    if (!card) return <div>Loading...</div>;
    return (
        <>


            {scrolled &&
                <div className='fixed top-0 bg-white hidden md:flex justify-between py-4 lg:pl-10 w-full z-50'>
                    {console.log("meeeeeeeeee")}
                    <div>
                        <ul className='flex justify-center items-center'>
                            <li className='text-sm p-4 hover:border-b-2 hover:border-black' onClick={scrollToPhotos}>Photos</li>
                            <li className='text-sm p-4 hover:border-b-2 hover:border-black' onClick={scrollToAmenities}>Amenities</li>
                            <li className='text-sm p-4 hover:border-b-2 hover:border-black' onClick={scrollToReviews}>Reviews</li>
                            <li className='text-sm px-2 py-4 hover:border-b-2 hover:border-black' onClick={scrollToLocation}>Location</li>
                        </ul>
                    </div>
                    {card.isComingSoon ? "" : card.soldOut ? "" :
                        <div className='flex justify-center mr-10 lg:mr-36 items-start'>
                            <div>
                                <h2 className="font-semibold text-gray-800 text-right">${card.price} <span className='text-sm font-normal'>per guest</span></h2>
                                <p className="text-sm text-gray-600 text-right">Closes {card.closingDate}</p>
                            </div>
                            <div>
                                <button className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-6 rounded-md w-full ml-5"
                                    onClick={() => payment(card.id)}
                                >Request</button>
                            </div>
                        </div>
                    }
                </div>

            }


        </>
    );

}

export default FixedNav;
