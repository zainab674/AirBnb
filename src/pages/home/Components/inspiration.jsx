
import React, { useState, useEffect } from 'react';

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import InspireCats from '../../../objects/InspireCats';
import Locations from '../../../objects/Locations';



const InspirationSection = () => {
    const [selectedCategory, setSelectedCategory] = useState('popular');
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 600);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const filteredLocations = Locations.filter(location =>
        selectedCategory === 'popular' ? location.popular : location.category === selectedCategory
    );

    const sliceEnd = isSmallScreen ? 5 : 17;
    const displayedLocations = showAll ? filteredLocations : filteredLocations.slice(0, sliceEnd);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setShowAll(false);
    };

    return (
        <section className="pt-16 bg-gray-100 lg:px-16 w-full">
            <div className="container">
                <div className="mb-12">
                    <h3 className="text-2xl font-semibold text-left mb-4">Inspiration for Future Getaways</h3>
                    <div className="">

                        {/* Scrollable InspireCats */}
                        <ul id="scrollable-InspireCats" className="flex flex-nowrap overflow-x-auto">
                            {InspireCats.map((category, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleCategoryClick(category)}
                                    className={`p-2 whitespace-nowrap rounded-lg text-sm cursor-pointer ${category === selectedCategory ? 'text-black underline' : 'bg-white text-gray-700'}`}
                                >
                                    {category}
                                </li>
                            ))}
                        </ul>


                    </div>
                    <hr className='w-full border border-t-gray-200 mb-4' />
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap -mx-4">
                            {displayedLocations.map((location, index) => (
                                <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-4">
                                    <div className="p-4 rounded-lg text-left">
                                        <h4 className="font-medium whitespace-nowrap">{location.city}</h4>
                                        <p className="whitespace-nowrap text-sm text-gray-500">{location.type}</p>
                                    </div>
                                </div>
                            ))}

                            {/* Show the 'Show More' button if there are more items */}
                            {!showAll && filteredLocations.length > sliceEnd && (
                                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-4">
                                    <button
                                        onClick={() => setShowAll(true)}
                                        className="w-full h-full text-black underline py-2 px-4 rounded inline-flex align-bottom text-left">
                                        <IoIosArrowDown className='mt-1 text-2xl mr-1' /> Show More
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { InspirationSection };