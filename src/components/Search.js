
import React, { useState } from "react";

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term.toLowerCase()); // Convert search term to lowercase
  };

  return (
    <div className="ui segment">
      <div className="ui fluid icon input">
        <input
          type="text"
          placeholder="Search by description..."
          value={searchTerm}
          onChange={handleChange}
        />
        <i className="search icon"></i>
      </div>
    </div>
  );
}

export default Search;
