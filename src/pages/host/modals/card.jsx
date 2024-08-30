

import { useNavigate } from 'react-router-dom';
import { apiConst } from './../../../constants/api.constants';



const Card = ({ image, title, id, }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        console.log("hi")
        navigate(apiConst.card.replace(':id', id));
    };
    return (
        <li className="relative w-72 p-2 mb-5 bg-white rounded-lg shadow-md flex-shrink-0">
            {/* Image */}
            <img
                src={image}
                alt={title}
                className="w-full h-56 object-cover rounded-lg"
                onClick={handleClick}
            />
            <p className='xl font-normal'>{title} </p>


        </li>
    );
};

export default Card;