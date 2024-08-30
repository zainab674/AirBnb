import React, { useEffect, useRef, useState } from 'react';

import flexible from './../../../assets/flexible.jpg'

import { AiOutlineSearch } from 'react-icons/ai';

import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro'; // Adjust the path according to your package and setup

const MultiInputDatePicker = ({ dateRange, setDateRange }) => (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateRangePicker
            localeText={{
                start: 'Check-in',
                end: 'Check-out',
            }}
            slotProps={{
                fieldSeparator: { sx: { display: 'none' } },
                textField: () => ({
                    color: 'primary',
                    sx: {
                        width: '7rem',
                        padding: 0,
                        fontSize: '1rem',
                        '& .MuiOutlinedInput-root': {
                            border: 'none',
                            padding: 0,
                            '& fieldset': {
                                border: 'none',
                            },
                        },
                    },
                }),
            }}
            value={dateRange}
            onChange={(newRange) => setDateRange(newRange)}
        />
    </LocalizationProvider>
);

const SingleInputDatePicker = () => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateRangePicker
            slots={{
                field: SingleInputDateRangeField,
            }}
            slotProps={{
                textField: {
                    placeholder: 'Add date',
                    sx: {
                        width: '15rem',
                        padding: 0,
                        fontSize: '1rem',
                        '& .MuiOutlinedInput-root': {
                            border: 'none',
                            padding: 0,
                            '& fieldset': {
                                border: 'none',
                            },
                        },
                    },
                },
            }}
            name="allowedRange"
        />
    </LocalizationProvider>
);


const DatePickerComponent = ({ isStay, dateRange, setDateRange }) => {
    return isStay ? (
        <MultiInputDatePicker dateRange={dateRange} setDateRange={setDateRange} />
    ) : (
        <SingleInputDatePicker />
    );
};


const Search = ({ isStay, isG, isR, setG, setR }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);

    const [scrolled, setScrolled] = useState(false);


    const [dateRange, setDateRange] = useState([null, null]);
    const [selectedValue, setSelectedValue] = useState('');
    const [isRegion, setIsRegion] = useState(false);
    const [isGuest, setIsGuest] = useState(false);

    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    const [pets, setPets] = useState(0);
    const dropdownRef = useRef(null);
    const regionRef = useRef(null);
    const guestRef = useRef(null);

    const toggleRegion = () => {
        setIsRegion(!isRegion);
    };


    const toggleGuest = () => {
        setIsGuest(!isGuest);
    };

    const handleBoxClick = (value) => {
        setSelectedValue(value);
        setIsRegion(false); // Optionally hide the dropdown after selection
    };

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
                if (adults > 0) {
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

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    useEffect(() => {
        const handleClickOutside = (event) => {



            if (regionRef.current && !regionRef.current.contains(event.target)) {
                setIsRegion(false);
                setR(false);
                console.log("rrrrrr")
            }

            if (guestRef.current && !guestRef.current.contains(event.target)) {
                setIsGuest(false);
                setG(false);
                console.log("gggggg")
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [regionRef, guestRef]);
    return (
        <>

            <div className={`${scrolled ? 'hidden' : 'flex'} hidden md:flex mt-20 items-center justify-between bg-white shadow-md rounded-full p-1 py-2 px-2 w-full max-w-3xl mx-auto text-left border border-gray-300 `}>
                {/* Where */}
                <div className="group flex-1 flex flex-col px-4 py-2 cursor-pointer rounded-full transition-colors duration-200 hover:bg-gray-200">
                    <button onClick={toggleRegion} className="w-full text-left">
                        <span className="text-xs font-semibold">Where</span>
                        <input
                            type="text"
                            className="text-sm text-gray-700 border-none outline-none bg-transparent placeholder-gray-500 w-full"
                            placeholder="Search destinations"
                            value={selectedValue}
                            readOnly
                        />
                    </button>
                </div>
                <div className="border-l h-10"></div>
                {(isRegion || isR) && (
                    <div
                        ref={regionRef}
                        className="absolute top-40 mt-2 p-8 bg-white border border-gray-300 shadow-lg text-black transition-transform duration-300 ease-in-out w-4/12 h-auto rounded-lg z-50">
                        <h3 className="mb-10">Search By Region</h3>
                        <div className="flex flex-wrap -mx-2 justify-between">
                            <div className="mb-4 w-28">
                                <div
                                    className="bg-gray-200 border border-gray-300 text-center rounded-lg cursor-pointer"
                                    onClick={() => handleBoxClick("I'm Flexible")}
                                >
                                    <img src={flexible} alt="Flexible" className="w-full h-auto" />
                                    <h4>I'm Flexible</h4>
                                </div>
                            </div>
                            <div className="mb-4 w-28">
                                <div
                                    className="bg-gray-200 border border-gray-300 text-center rounded-lg cursor-pointer"
                                    onClick={() => handleBoxClick("Middle East")}
                                >
                                    <img src={flexible} alt="Middle East" className="w-full h-auto" />
                                    <h4>Middle East</h4>
                                </div>
                            </div>
                            <div className="mb-4 w-28">
                                <div
                                    className="bg-gray-200 border border-gray-300 text-center rounded-lg cursor-pointer"
                                    onClick={() => handleBoxClick("United Arab")}
                                >
                                    <img src={flexible} alt="United Arab" className="w-full h-auto" />
                                    <h4>United Arab</h4>
                                </div>
                            </div>
                            <div className="mb-4 w-28">
                                <div
                                    className="bg-gray-200 border border-gray-300 text-center rounded-lg cursor-pointer"
                                    onClick={() => handleBoxClick("Europe")}
                                >
                                    <img src={flexible} alt="Europe" className="w-full h-auto" />
                                    <h4>Europe</h4>
                                </div>
                            </div>
                            <div className="mb-4 w-28">
                                <div
                                    className="bg-gray-200 border border-gray-300 text-center rounded-lg cursor-pointer"
                                    onClick={() => handleBoxClick("United Kingdom")}
                                >
                                    <img src={flexible} alt="United Kingdom" className="w-full h-auto" />
                                    <h4>UnitedKingdom</h4>
                                </div>
                            </div>
                            <div className="mb-4 w-28">
                                <div
                                    className="bg-gray-200 border border-gray-300 text-center rounded-lg cursor-pointer"
                                    onClick={() => handleBoxClick("South East Asia")}
                                >
                                    <img src={flexible} alt="South East Asia" className="w-full h-auto" />
                                    <h4>South East Asia</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* When */}
                <DatePickerComponent isStay={isStay} dateRange={dateRange} setDateRange={setDateRange} />



                {/* Who */}

                <div className=" relative group flex-1 flex flex-col px-4 py-2 cursor-pointer rounded-full transition-colors duration-200 hover:bg-gray-200 ">
                    <button onClick={toggleGuest} className="w-full text-left flex flex-col">
                        <span className="text-xs font-semibold">Who</span>


                        <span className="text-sm text-gray-500">
                            {adults > 0 && `${adults} ${adults === 1 ? 'Adult' : 'Adults'}`}
                            {children > 0 && `, ${children} ${children === 1 ? 'Child' : 'Children'}`}
                            {infants > 0 && `, ${infants} ${infants === 1 ? 'Infant' : 'Infants'}`}
                            {pets > 0 && `, ${pets} ${pets === 1 ? 'Pet' : 'Pets'}`}
                            {!adults && !children && !infants && !pets && 'Add guests'}
                        </span>
                    </button>

                </div>
                {(isGuest || isG) && (
                    <div
                        ref={guestRef}
                        className="absolute mt-2  top-40 right-28 bg-white border border-gray-300 shadow-lg text-black transition-transform duration-300 ease-in-out w-96 h-auto rounded-lg z-50 ">
                        <div className="mb-4 flex justify-between px-4">
                            <div>
                                <h2 className="text-lg font-medium text-gray-800">Adults</h2>
                                <p className="text-gray-600">Ages 13 or above</p>
                            </div>
                            <div className="flex items-center mt-2">
                                {adults > 0 && (
                                    <button
                                        onClick={() => handleDecrement('adults')}
                                        className="flex items-center justify-center w-8 h-8  hover:bg-gray-300 text-gray-500 text-2xl rounded-full border border-gray-700"
                                    >
                                        -
                                    </button>
                                )}
                                <span className="text-gray-800 font-bold text-lg mx-4">{adults}</span>
                                {adults + children < 16 && (
                                    <button
                                        onClick={() => handleIncrement('adults')}
                                        className="flex items-center justify-center w-8 h-8  hover:bg-gray-300 text-gray-500 text-2xl rounded-full border border-gray-700"
                                    >
                                        +
                                    </button>
                                )}
                            </div>
                        </div>
                        <div className="mb-4 flex justify-between px-4">
                            <div>
                                <h2 className="text-lg font-medium text-gray-800">Children</h2>
                                <p className="text-gray-600">Ages 2-12</p>
                            </div>
                            <div className="flex items-center mt-2">
                                {children > 0 && (
                                    <button
                                        onClick={() => handleDecrement('children')}
                                        className="flex items-center justify-center w-8 h-8  hover:bg-gray-300 text-gray-500 text-2xl rounded-full border border-gray-700"
                                    >
                                        -
                                    </button>
                                )}
                                <span className="text-gray-800 font-bold text-lg mx-4">{children}</span>
                                {adults + children < 16 && (
                                    <button
                                        onClick={() => handleIncrement('children')}
                                        className="flex items-center justify-center w-8 h-8  hover:bg-gray-300 text-gray-500 text-2xl rounded-full border border-gray-700"
                                    >
                                        +
                                    </button>
                                )}
                            </div>
                        </div>
                        <div className="mb-4 flex justify-between px-4">
                            <div>
                                <h2 className="text-lg font-medium text-gray-800">Infants</h2>
                                <p className="text-gray-600">Under 2</p>
                            </div>
                            <div className="flex items-center mt-2">
                                {infants > 0 && (
                                    <button
                                        onClick={() => handleDecrement('infants')}
                                        className="flex items-center justify-center w-8 h-8  hover:bg-gray-300 text-gray-500 text-2xl rounded-full border border-gray-700"
                                    >
                                        -
                                    </button>
                                )}
                                <span className="text-gray-800 font-bold text-lg mx-4">{infants}</span>
                                {infants < 5 && (
                                    <button
                                        onClick={() => handleIncrement('infants')}
                                        className="flex items-center justify-center w-8 h-8  hover:bg-gray-300 text-gray-500 text-2xl rounded-full border border-gray-700"
                                    >
                                        +
                                    </button>
                                )}
                            </div>
                        </div>
                        <div className="mb-4 flex justify-between px-4">
                            <div>
                                <h2 className="text-lg font-medium text-gray-800">Pets</h2>
                                <p className="text-gray-600">Bringing a service animal?</p>
                            </div>
                            <div className="flex items-center mt-2">
                                {pets > 0 && (
                                    <button
                                        onClick={() => handleDecrement('pets')}
                                        className="flex items-center justify-center w-8 h-8  hover:bg-gray-300 text-gray-500 text-2xl rounded-full border border-gray-700"
                                    >
                                        -
                                    </button>
                                )}
                                <span className="text-gray-800 font-bold text-lg mx-4">{pets}</span>
                                {pets < 5 && (
                                    <button
                                        onClick={() => handleIncrement('pets')}
                                        className="flex items-center justify-center w-8 h-8  hover:bg-gray-300 text-gray-500 text-2xl rounded-full border border-gray-700"
                                    >
                                        +
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                )}



                {/* Search Button */}
                <button className="bg-red-500 text-white p-3 rounded-full ml-4">
                    <AiOutlineSearch className="text-xl" />
                </button>
            </div>
        </>
    );
};

export default Search;