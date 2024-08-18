import './SearchBar.scss';
import { FaArrowRight } from "react-icons/fa6";
import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className='search_container'>
        <input
          className="home_search-bar"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}><FaArrowRight/></button>
    </div>
  );
}

export default SearchBar;
