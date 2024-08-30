import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaRegStar } from "react-icons/fa";

import { useNavigate } from 'react-router-dom';
import Cards from '../../../../objects/cards';
import { apiConst } from '../../../../constants/api.constants';


function Section2() {


    const { id } = useParams();
    const foundCard = Cards.find(c => c.id == id);

    const [card, setCard] = useState(foundCard);




    const navigate = useNavigate();






    useEffect(() => {
        // Fetch card details based on the ID
        const foundCard = Cards.find(c => c.id == id);
        setCard(foundCard);
    }, [id]);

    const payment = (id) => {
        console.log("iddd", id)
        navigate(apiConst.payment.replace(':id', id));
    };

    const handleClick = () => {
        console.log("hi")
        navigate(apiConst.host.replace(':id', card.hostId));
    };




    if (!card) return <div>Loading...</div>;
    return (
        <>
            <div className="flex flex-col md:flex-row m-5 md:mx-16 justify-between text-left md:mb-8 mb-2">
                <div className='w-full md:w-3/4'>
                    <div>
                        <h1 className="text-xl md:text-2xl font-medium text-black mt-0 md:mt-7">{card.city}, {card.country}</h1>
                        <h3 className="text-sm md:text-base">{card.guestrooms} guests. {card.bedrooms} Bedrooms. {card.beds} Beds </h3>
                    </div>
                    <hr className='border border-t-1 border-gray-200 mt-10 mb-6' />
                    <div className="flex  md:flex-row items-left mb-4 mt-6">
                        <img src={card.host.image} alt="Host Image" className="rounded-full mr-4 h-14 w-14" />
                        <div>
                            <h3 className="text-lg font-medium text-gray-800">Hosted by {card.host.name}</h3>
                            <p className="text-sm text-gray-600">{card.host.keyword}</p>
                        </div>
                    </div>
                    <hr className='border border-t-1 border-gray-200 mt-10 mb-6' />
                    <div className="w-full">
                        <ul className="text-gray-600">
                            {card.activities.map((activity, index) => (
                                <li key={index} className="mb-4 flex items-start">
                                    {activity.icon ? <activity.icon className="text-3xl mt-2 md:mr-8 mr-4" /> :
                                        <FaRegStar className="text-3xl mt-2 mr-8" />
                                    }
                                    <div>
                                        <span className="text-gray-800 font-medium">{activity.name}</span>
                                        <br />
                                        {activity.description}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full">
                        <p className="text-gray-800 mb-4">{card.shortDescription}</p>
                    </div>
                    <div className="w-full">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">What you'll do</h2>
                        <p className="text-gray-800 mb-4">{card.whatYoullDo}</p>
                    </div>
                    <hr className='border border-t-1 border-gray-200 mt-10 mb-6' />
                    <div>
                        <h1 className='text-xl md:text-2xl font-medium'>Meet Your Host</h1>
                        <div className="bg-white p-4 w-full md:w-96 pb-6 text-center rounded-md shadow-2xl h-auto md:h-52 border border-gray-100 mt-2 mb-5">
                            <img src={card.host.image}
                                alt=""
                                className='w-24 h-24 rounded-full mx-auto'
                                onClick={handleClick}
                            />
                            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">{card.host.name}</h2>
                            <p className="font-medium text-sm text-black">Hosting From {card.host.totalYears} Years</p>
                        </div>
                        <p className='w-full md:w-3/4 '>{card.host.description}</p>
                    </div>
                </div>

                {card.isComingSoon ?
                    <div className="hidden md:block bg-white p-4 pb-6 text-center rounded-md shadow-md w-full md:w-96 h-40 border border-gray-300 mt-10">
                        <h2 className="text-lg font-bold text-gray-800 mb-2">Coming {card.coming}</h2>
                        <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-md mt-4 w-full">Notify Me</button>
                    </div>
                    : card.soldOut ?
                        <div className="hidden md:block bg-white p-4 pb-6 text-center rounded-md shadow-md w-full md:w-96 h-40 border border-gray-300 mt-10">
                            <h2 className="text-lg font-bold text-gray-800 mb-2">Sold Out</h2>
                            <button className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-md mt-4 w-full">Request</button>
                        </div>
                        :
                        <div className="hidden md:block bg-white p-4 pb-6 text-center rounded-md shadow-md w-full md:w-96 h-40 border border-gray-300 mt-10">
                            <h2 className="text-xl font-bold text-gray-800 mb-2">${card.price} <span className='text-xl font-normal'>per guest</span></h2>
                            <p className="text-sm text-gray-600">Closes {card.closingDate}</p>
                            <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-md mt-4 w-full"
                                onClick={() => payment(card.id)}
                            >Request</button>
                        </div>
                }

            </div>








        </>
    );

}

export default Section2;
