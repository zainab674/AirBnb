import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

export default function GuestSelectionModal({ isOpen, handleClose, onSave }) {
    const [adults, setAdults] = useState(1); // Default to 1
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    const [pets, setPets] = useState(0);
    const [totalGuests, setTotalGuests] = useState(1); // Default to 1 because of one adult

    useEffect(() => {
        setTotalGuests(adults + children + infants + pets);
    }, [adults, children, infants, pets]);

    const handleIncrement = (category) => {
        switch (category) {
            case 'adults':
                setAdults(adults + 1);
                break;
            case 'children':
                setChildren(children + 1);
                break;
            case 'infants':
                setInfants(infants + 1);
                break;
            case 'pets':
                setPets(pets + 1);
                break;
            default:
                break;
        }
    };

    const handleDecrement = (category) => {
        switch (category) {
            case 'adults':
                if (adults > 1) {
                    setAdults(adults - 1);
                }
                break;
            case 'children':
                if (children > 0) {
                    setChildren(children - 1);
                }
                break;
            case 'infants':
                if (infants > 0) {
                    setInfants(infants - 1);
                }
                break;
            case 'pets':
                if (pets > 0) {
                    setPets(pets - 1);
                }
                break;
            default:
                break;
        }
    };

    const handleSave = () => {
        onSave(totalGuests);
        handleClose();
    };
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: '8px',
        width: '100%', // Default to full width
        maxWidth: '500px', // Maximum width for larger screens
    };

    return (
        <Modal
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="guest-selection-modal"
            aria-describedby="guest-selection-modal-description"
        >
            <Box sx={style} className="sm:w-full md:max-w-lg lg:max-w-2xl" >
                <div className="space-y-4">
                    {/* Modal content */}
                    <div className="flex justify-between text-gray-700">
                        <div>
                            <h2 className="text-lg font-medium text-gray-800">Adults</h2>
                            <p className="text-gray-600">Ages 13 or above</p>
                        </div>
                        <div className="flex items-center mt-2">
                            <button
                                onClick={() => handleDecrement('adults')}
                                className="flex items-center justify-center w-8 h-8 hover:bg-gray-300 text-gray-500 text-2xl rounded-full border border-gray-700"
                            >
                                -
                            </button>
                            <span className="text-gray-800 font-bold text-lg mx-4">{adults}</span>
                            {adults + children < 16 && (
                                <button
                                    onClick={() => handleIncrement('adults')}
                                    className="flex items-center justify-center w-8 h-8 hover:bg-gray-300 text-gray-500 text-2xl rounded-full border border-gray-700"
                                >
                                    +
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-between text-gray-700">
                        <div>
                            <h2 className="text-lg font-medium text-gray-800">Children</h2>
                            <p className="text-gray-600">Ages 2-12</p>
                        </div>
                        <div className="flex items-center mt-2">
                            {children > 0 && (
                                <button
                                    onClick={() => handleDecrement('children')}
                                    className="flex items-center justify-center w-8 h-8 hover:bg-gray-300 text-gray-500 text-2xl rounded-full border border-gray-700"
                                >
                                    -
                                </button>
                            )}
                            <span className="text-gray-800 font-bold text-lg mx-4">{children}</span>
                            {adults + children < 16 && (
                                <button
                                    onClick={() => handleIncrement('children')}
                                    className="flex items-center justify-center w-8 h-8 hover:bg-gray-300 text-gray-500 text-2xl rounded-full border border-gray-700"
                                >
                                    +
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-between text-gray-700">
                        <div>
                            <h2 className="text-lg font-medium text-gray-800">Infants</h2>
                            <p className="text-gray-600">Under 2</p>
                        </div>
                        <div className="flex items-center mt-2">
                            {infants > 0 && (
                                <button
                                    onClick={() => handleDecrement('infants')}
                                    className="flex items-center justify-center w-8 h-8 hover:bg-gray-300 text-gray-500 text-2xl rounded-full border border-gray-700"
                                >
                                    -
                                </button>
                            )}
                            <span className="text-gray-800 font-bold text-lg mx-4">{infants}</span>
                            {infants < 5 && (
                                <button
                                    onClick={() => handleIncrement('infants')}
                                    className="flex items-center justify-center w-8 h-8 hover:bg-gray-300 text-gray-500 text-2xl rounded-full border border-gray-700"
                                >
                                    +
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-between text-gray-700">
                        <div>
                            <h2 className="text-lg font-medium text-gray-800">Pets</h2>
                            <p className="text-gray-600">Bringing a service animal?</p>
                        </div>
                        <div className="flex items-center mt-2">
                            {pets > 0 && (
                                <button
                                    onClick={() => handleDecrement('pets')}
                                    className="flex items-center justify-center w-8 h-8 hover:bg-gray-300 text-gray-500 text-2xl rounded-full border border-gray-700"
                                >
                                    -
                                </button>
                            )}
                            <span className="text-gray-800 font-bold text-lg mx-4">{pets}</span>
                            {pets < 5 && (
                                <button
                                    onClick={() => handleIncrement('pets')}
                                    className="flex items-center justify-center w-8 h-8 hover:bg-gray-300 text-gray-500 text-2xl rounded-full border border-gray-700"
                                >
                                    +
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="mt-4 text-right text-gray-800">
                        <h2 className="text-lg font-medium">Total Guests: {totalGuests}</h2>
                    </div>
                    {/* Buttons */}
                    <div className="flex justify-end mt-4 space-x-2">
                        <button
                            onClick={handleClose}
                            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSave}
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </Box>
        </Modal>
    );
}
