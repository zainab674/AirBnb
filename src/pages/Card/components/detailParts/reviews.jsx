import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Cards from './../../../../objects/cards';


const calculateAverageRating = (reviews) => {
    const totalRating = reviews.reduce((sum, review) => sum + review.star, 0);
    return (totalRating / reviews.length).toFixed(1);
};

function Reviews() {


    const { id } = useParams();
    const foundCard = Cards.find(c => c.id == id);

    const [card, setCard] = useState(foundCard);

    useEffect(() => {
        // Fetch card details based on the ID
        const foundCard = Cards.find(c => c.id == id);
        setCard(foundCard);
    }, [id]);
    const averageRating = calculateAverageRating(card.reviews);

    if (!card) return <div>Loading...</div>;
    return (
        <>

            <div className=" mx-auto p-4 mb-16 " id='reviews'>
                {/* Heading */}
                <div className="mb-6 text-left md:ml-16">
                    <h1 className="text-xl md:text-2xl font-bold flex items-center   space-x-2">
                        <svg
                            className="w-6 h-6 md:w-9 md:h-9 text-gray-500"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2.7l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4-3.9-3.8 5.4-.8L12 2.7z" />
                        </svg>
                        <span>{averageRating} - {card.reviews.length} Reviews</span>
                    </h1>
                </div>

                {/* Cards */}
                <div className="flex md:flex-wrap overflow-x-auto -mx-2 md:px-16">
                    {card.reviews.map((review, index) => (
                        <div
                            key={index}
                            className="w-full  md:w-1/2 lg:w-1/2 px-2 mb-4"
                        >
                            <div className="bg-white shadow-lg rounded-lg p-4">
                                {/* First Row */}
                                <div className="flex flex-col sm:flex-row items-center">
                                    <img
                                        src={`https://via.placeholder.com/100?text=${review.name.charAt(0)}`}
                                        alt={`${review.name}'s profile`}
                                        className="w-16 h-16 rounded-full object-cover"
                                    />
                                    <div className="mt-4 sm:mt-0 sm:ml-4">
                                        <h2 className="text-lg font-semibold whitespace-nowrap">{review.name}</h2>
                                        <p className="text-gray-500 whitespace-nowrap">{review.city}, {review.country}</p>
                                    </div>
                                </div>

                                {/* Second Row */}
                                <div className="md:flex items-center mt-4">
                                    <div className="flex items-center">
                                        {[...Array(5)].map((_, starIndex) => (
                                            <svg
                                                key={starIndex}
                                                className={`w-5 h-5 ${starIndex < review.star ? 'text-yellow-500' : 'text-gray-300'}`}
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 2.7l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4-3.9-3.8 5.4-.8L12 2.7z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="ml-2 text-gray-600 text-sm">{review.date}</p>
                                </div>

                                {/* Third Row */}
                                <div className="mt-4">
                                    <p className="text-gray-700 text-sm md:text-base">{review.comment}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>



        </>
    );

}

export default Reviews;
