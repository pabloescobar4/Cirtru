import React, { useState, useEffect } from 'react';
import CarListing from './components/carListing';
import Filter from './components/filter';
import './App.css';

import { carData } from './carData';

function App() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
  
    setCars(carData); 
  }, []);

  const [filters, setFilters] = useState({
    year: '',
    make: '',
    model: '',
    price: '',
  });

  const filteredCars = cars.filter((car) => {
    return (
      (filters.year ? car.year === parseInt(filters.year) : true) &&
      (filters.make
        ? car.make.toLowerCase().includes(filters.make.toLowerCase())
        : true) &&
      (filters.model
        ? car.model.toLowerCase().includes(filters.model.toLowerCase())
        : true) &&
      (filters.price ? car.price <= parseInt(filters.price) : true)
    );
  });

  return (
    <div className="App">
      <Filter filters={filters} setFilters={setFilters} />
      <div className="car-list">
        {filteredCars.map((car) => (
          <CarListing key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}

export default App;
