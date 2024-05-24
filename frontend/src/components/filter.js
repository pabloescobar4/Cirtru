import React from 'react';
import './filter.css';

function Filter({ filters, setFilters }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div className="filter">
      <input
        type="number"
        name="year"
        placeholder="Year"
        value={filters.year}
        onChange={handleChange}
      />
      <input
        type="text"
        name="make"
        placeholder="Make"
        value={filters.make}
        onChange={handleChange}
      />
      <input
        type="text"
        name="model"
        placeholder="Model Name"
        value={filters.model}
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        placeholder="Max Price"
        value={filters.price}
        onChange={handleChange}
      />
    </div>
  );
}

export default Filter;
