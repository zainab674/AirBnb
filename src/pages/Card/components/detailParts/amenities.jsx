import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Cards from './../../../../objects/cards';
import AmenitiesModal from '../../modals/amenitiesModal';



function Amenities() {


    const { id } = useParams();
    const foundCard = Cards.find(c => c.id == id);

    const [card, setCard] = useState(foundCard);

    useEffect(() => {
        // Fetch card details based on the ID
        const foundCard = Cards.find(c => c.id == id);
        setCard(foundCard);
    }, [id]);

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [amenitiesList, setAmenitiesList] = useState([]);

    const openM = () => {
        console.log("Opening Modal"); // Debugging line
        setAmenitiesList(card.amenities); // Load all amenities into the modal
        setModalIsOpen(true);
    };

    const closeM = () => {
        console.log("Closing Modal"); // Debugging line
        setModalIsOpen(false);
    };

    const renderAmenities = (items) => (
        items.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
                <item.icon className="w-6 h-6 text-gray-600" />
                <span>{item.name}</span>
            </div>
        ))
    );
    if (!card) return <div>Loading...</div>;
    return (
        <>

            <div className="p-4 md:p-6 lg:p-8 w-full md:w-3/4 lg:w-1/2 px-4 md:px-8 lg:px-16" id='amenities'>
                <h2 className="text-lg md:text-xl lg:text-2xl text-left font-medium mb-4">What this place offers</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-4">
                        {renderAmenities(card.amenities.slice(0, 5))}
                    </div>
                    <div className="space-y-4">
                        {renderAmenities(card.amenities.slice(5, 10))}
                    </div>
                </div>
                <button
                    onClick={openM}
                    className="mt-6 py-2 px-4 text-black rounded border border-gray-600 w-full md:w-auto"
                >
                    Show all amenities
                </button>

                <AmenitiesModal
                    isOpen={modalIsOpen}
                    onClose={closeM}
                    list={card.amenities}
                />
            </div>


        </>
    );

}

export default Amenities;
