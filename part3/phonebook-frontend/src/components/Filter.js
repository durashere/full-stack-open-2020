import React from "react";

const Filter = ({ valueFilter, handleFilterChange }) => {
  return (
    <div>
      filter shown with
      <input onChange={handleFilterChange} value={valueFilter} />
    </div>
  );
};

export default Filter;
