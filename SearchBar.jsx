import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm, onSearch }) => {
  return (
    <div className="flex justify-center items-center gap-2 p-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a recipe..."
        className="px-4 py-2 border rounded w-80 shadow"
      />
      <button
        onClick={onSearch}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;