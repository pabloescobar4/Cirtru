import React from 'react';
import './carListing.css';

function CarListing({ car }) {
  return (
    <div className="car-listing">
      <div style={{ height: '200px', width: '300px' }}>
        <img
          src={car.image}
          style={{ height: '100%', width: '100%',borderRadius:"10px" }}
          alt={`${car.make} ${car.model}`}
        />
      </div>
      <div className="car-details">
        <h3>
          {car.year} {car.make} {car.model}
        </h3>
        <p>${car.price}</p>
      </div>
    </div>
  );
}

export default CarListing;
