import { AiOutlineClose } from 'react-icons/ai';



const AmenitiesModal = ({ isOpen, onClose, list }) => {
    if (!isOpen) return null;

    console.log("lllllllllll", list)
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg w-11/12 md:w-3/4 lg:w-7/12 p-6 text-left max-h-[80vh] overflow-y-auto">
                {/* Close Button */}
                <button className="text-gray-600 mb-4 hover:text-gray-900" onClick={onClose}>
                    <AiOutlineClose size={19} />
                </button>

                {/* Title */}
                <h1 className="text-xl md:text-2xl font-semibold mb-4 text-left">All Amenities</h1>

                {/* Amenities List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {list.map((amenity, index) => (
                        <div key={index} className="flex items-center space-x-2">
                            {/* Render the icon as a component */}
                            <span>
                                <amenity.icon size={24} />  {/* Adjust size as needed */}
                            </span>
                            <span>{amenity.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default AmenitiesModal;
