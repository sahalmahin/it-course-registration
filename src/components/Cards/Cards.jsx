import { useState } from 'react'
import { useEffect } from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

const Cards = ({ handleMark }) => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('cards.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    return (
        <div className=''>
            <div className='grid grid-cols-3 gap-10'>
                {
                    cards.map(card => <Card key={card.id}
                        card={card}
                        handleMark={handleMark}
                        ></Card>)
                }
            </div>
        </div>
    );
};

Cards.propTypes = {
    handleMark: PropTypes.func,
}

export default Cards;