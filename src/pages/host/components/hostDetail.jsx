


import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { IoCheckmark } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

import { TiFlag } from "react-icons/ti";
import Hosts from '../../../objects/hosts';
import Card from '../modals/card';



function HostDe() {
    const { id } = useParams();
    const [host, setHost] = useState(null);

    useEffect(() => {
        // Fetch card details based on the ID
        const foundHost = Hosts.find(c => c.id == id);
        setHost(foundHost);
    }, [id]);

    if (!host) return <div>Loading...</div>;


    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="bg-white flex flex-col md:flex-row ">

                <div className="w-full md:w-1/3 mr-0 md:mr-5 mb-6 md:mb-0">
                    <div className="pb-4 rounded-lg shadow-md flex justify-evenly items-center w-full mb-6">
                        <div className="text-center md:text-left">
                            <img
                                src={host.image}
                                alt={host.name}
                                className="h-24 w-24 rounded-full mb-4 mx-auto md:mx-0"
                            />
                            <h1 className="text-2xl font-bold">{host.name}</h1>
                            <span className="text-gray-500 flex items-center justify-center md:justify-start space-x-2">
                                <span>🏆</span>
                                <span>Superhost</span>
                            </span>
                        </div>
                        <div className="mt-4 space-y-2">
                            <div className="flex items-center space-x-2">
                                <strong className="text-lg">833</strong>
                                <span className="text-gray-500">Reviews</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <strong className="text-lg">4.87</strong>
                                <span className="text-gray-500">Rating</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <strong className="text-lg">{host.totalYears}</strong>
                                <span className="text-gray-500">Years hosting</span>
                            </div>
                        </div>
                    </div>
                    <div className="pb-4 rounded-lg shadow-md flex flex-col justify-evenly items-center w-full mb-6">
                        <div>
                            <h1 className="text-xl font-medium mb-4">{host.name} Confirmed Information</h1>
                            <div className="flex justify-start">
                                {host.identity ? <IoCheckmark className="text-2xl mt-1 m-2" /> : <RxCross1 className="text-2xl mt-1 m-2" />}
                                <p className="text-lg text-gray-600">Identity</p>
                            </div>
                            <div className="flex justify-start">
                                {host.number ? <IoCheckmark className="text-2xl mt-1 m-2" /> : <RxCross1 className="text-2xl mt-1 m-2" />}
                                <p className="text-lg text-gray-600">Number</p>
                            </div>
                            <p className="underline">Learn about identity verification</p>
                        </div>
                    </div>
                    <p className="underline text-gray-900 font-medium inline-flex">
                        <TiFlag className="text-2xl mr-2" />
                        <span>Report this Profile</span>
                    </p>
                </div>

                <div className="w-full md:w-2/3">
                    <div className="pl-0 md:pl-6">
                        <h2 className="text-4xl font-semibold mb-4 text-left">About {host.name}</h2>
                        <p>{host.description}</p>
                    </div>
                    <h1 className="pl-0 md:pl-6 font-medium mt-5 text-2xl text-left">{host.name} Listings</h1>
                    <ul className="flex py-4 px-2 list-none mx-auto overflow-x-auto scrollbar-hide"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                        {host.locations.map((location, index) => (
                            <li key={index}>
                                <Card {...location} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

    );

}



export default HostDe;
