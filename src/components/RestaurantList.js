import React from 'react';
import Restaurant from './Restaurant';
import PropTypes from 'prop-types';

const RestaurantList = ({data}) => {

    const restaurantComponents = data.map((restaurant) => {
        return (
            <Restaurant
            key={restaurant.id}
            name={restaurant.name}
            cuisine={restaurant.cuisine}
            rating={restaurant.rating}
            distance={restaurant.distance}
            />
        );
    }
        );

    return (
        <div>
            <h1> Restaurant List </h1>
            {restaurantComponents}
        </div>
    );
};

RestaurantList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    cuisine: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    distance: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    })).isRequired,
};

export default RestaurantList;