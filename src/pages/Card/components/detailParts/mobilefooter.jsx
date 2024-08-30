
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cards from '../../../../objects/cards';
import { apiConst } from '../../../../constants/api.constants';


function MobileFooter() {


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




    if (!card) return <div>Loading...</div>;
    return (

        <>
            <div className="fixed bottom-0 pb-4 z-50 w-full bg-white shadow-lg md:hidden">
                {card.isComingSoon ? (
                    <div className='flex justify-around items-center p-4'>
                        <div>
                            <h2 className="font-medium text-gray-800 text-right">Coming {card.coming}</h2>
                        </div>
                        <div>
                            <button className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-6 rounded-md w-full ml-5">
                                Notify Me
                            </button>
                        </div>
                    </div>
                ) : card.soldOut ? (
                    <div className='flex justify-around items-center p-2'>
                        <div>
                            <h2 className="font-semibold text-gray-800 text-right">Sold Out</h2>
                        </div>
                        <div>
                            <button className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-3 px-6 rounded-md w-full ml-5">
                                Request
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className='flex justify-center items-center p-1'>
                        <div>
                            <h2 className="font-semibold text-gray-800 text-right">${card.price} <span className='text-sm font-normal'>per guest</span></h2>
                            <p className="text-sm text-gray-600 text-right">Closes {card.closingDate}</p>
                        </div>
                        <div>
                            <button className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-6 rounded-md w-full ml-5" onClick={() => payment(card.id)}>
                                Request
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>



    );

}

export default MobileFooter;

