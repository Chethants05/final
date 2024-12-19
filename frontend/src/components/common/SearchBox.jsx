import React, { useState } from 'react';
import { VscSearch } from 'react-icons/vsc'

const SearchBox = ({ data, searchKey, placeholder, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter the data based on searchTerm and searchKey
  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    // If searchTerm is empty, show the full list, otherwise filter the data
    if (term === '') {
      onFilter(data);  // Pass the full data to parent if searchTerm is empty
    } else {
      const filteredData = data.filter(item =>
        item[searchKey].toLowerCase().includes(term.toLowerCase())
      );
      onFilter(filteredData);  // Pass the filtered data to parent
    }
  };

  return (
    <div className="flex">
      <div className="w-full max-w-md">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder={placeholder || 'Search...'}
            className="w-full p-3 pl-10 bg-transparent border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <VscSearch className="h-5 w-5" /> {/* Using the VscSearch icon */}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
