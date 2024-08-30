import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Cards from './../../../../objects/cards';




function Rooms() {


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


            <div className="p-4 md:p-6 lg:p-8 w-full md:w-1/2 px-4 md:px-8 lg:px-16">
                <h2 className="text-lg md:text-xl lg:text-2xl text-left font-medium mb-4">Where you'll sleep</h2>
                <div>
                    <img src={card.image} alt="" className='w-32 h-32 md:w-40 md:h-40 lg:w-56 lg:h-56' />
                    <p className='text-left mt-2'>One room</p>
                </div>
            </div>


        </>
    );

}

export default Rooms;
