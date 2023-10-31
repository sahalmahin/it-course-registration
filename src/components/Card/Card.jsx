import PropTypes from 'prop-types';
import { BiDollar } from "react-icons/bi";
import { BsBook } from "react-icons/bs";

const Card = ({ card, handleMark }) => {
    console.log(card);
    const { cover_image, title, description, price, duration } = card;
    return (
        <div className='w-[320px] h-[430px] bg-white rounded-xl p-5'>
            <img src={cover_image} alt="" />
            <h3 className='font-bold my-4'>{title}</h3>
            <p className='text-gray-500'>{description}</p>
            <div className='flex justify-between my-4'>
                <p className='flex items-center gap-2 font-medium text-gray-600'><BiDollar size='1.5rem'></BiDollar>Price : {price}</p>
                <p className='flex items-center gap-2 font-medium text-gray-600'><BsBook size='1.5rem'></BsBook>Credit : {duration}hr</p>
            </div>

            <button onClick={() => handleMark(card)} className='text-white font-semibold bg-sky-500 w-full rounded-lg py-2 mb-2'>Select</button>
            
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object.isRequired,
    handleMark: PropTypes.func,
}

export default Card;