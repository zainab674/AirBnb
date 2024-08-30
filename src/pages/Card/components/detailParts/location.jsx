import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Cards from './../../../../objects/cards';
import Map from '../../modals/map';



function Location() {


    const { id } = useParams();
    const foundCard = Cards.find(c => c.id == id);

    const [card, setCard] = useState(foundCard);

    useEffect(() => {
        // Fetch card details based on the ID
        const foundCard = Cards.find(c => c.id == id);
        setCard(foundCard);
    }, [id]);


    if (!card) return <div>Loading...</div>;
    return (
        <>

            <div className='px-4 md:px-8 lg:px-16' id='location'>
                <h1 className='text-xl md:text-2xl font-medium text-left mb-4'>Where you'll be</h1>
                <p className='text-sm md:text-base text-left mb-5'>{card.city}, {card.country}</p>
                <div className=''>
                    <Map />
                </div>
            </div>

        </>
    );

}

export default Location;
