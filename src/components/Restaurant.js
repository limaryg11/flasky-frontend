import React from 'react';
import './Restaurant.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Restaurant = ({name, cuisine, rating, distance}) => {

    const [updateRating, setRating] = useState(rating);

    // const increaseRating = () => {
    //     setRating(updateRating);
    // };

    // const decreaseButton = () => {
    //     setRating(updateRating - 1);
    // };

    const changeRating = (direction) => {
        if (direction ==='up') {
            setRating(updateRating + 1);
        }else if (direction === 'down') {
            setRating(updateRating - 1);
        }
    };

    const determineColor = () => {
        if (updateRating > 5) {
            return 'high-rating';
        }else {
            return 'rating';
        }
    }




    return (
    <div>
        <h2 className='restaurant-title'>{name}</h2>
        <ul className='restaurant-list'>
            <li>Cuisine: {cuisine}</li>
            <li className={determineColor()}>Rating: {updateRating}</li>
            <button onClick={ () => {changeRating('up')} }>Upvote</button>
            <button onClick={ () => {changeRating('down')} }>Downvote</button>
            <li>Distance from Ada: {distance}</li>
        </ul>
    </div>
    );
};

Restaurant.propTypes = {
    name: PropTypes.string.isRequired,
    cuisine: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    distance: PropTypes.string.isRequired
}

export default Restaurant;