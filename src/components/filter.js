import React, { useState } from "react";

const Filter = ({ handleChange }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const changeSearchTerm = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    handleChange(newSearchTerm);
  };

  return (
    <form>
      <input
        onChange={changeSearchTerm}
        type="text"
        name="searchTerm"
        placeholder="Filter by topic"
        value={searchTerm}
      />
    </form>
  );
};

export default Filter;
