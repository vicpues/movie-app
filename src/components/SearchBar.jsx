import React, {useRef, useState} from "react";
// ICONS
import { CiSearch } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";
import { getData } from "../API/api";
// redux
import { useDispatch } from "react-redux";
import { setQuery } from "../Store/Features/SingleQuery";
import { setItem } from '../Store/Features/ListSearch'
import { setMovies } from "../Store/Features/MoviesList";
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const searchMovie = (name) => {
    dispatch(setQuery(name));
    const fetchData = async () =>{
      const response = await getData(name);
      dispatch(setMovies(response));
    };
    fetchData();
    dispatch(setItem("discover"))
    
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); 
      if (searchTerm.trim() !== "") {
        searchMovie(searchTerm.toLowerCase());
      };
    };
  };
  return (
    <div className="bg-[#3B54D4] py-7 px-9 flex gap-3 justify-between items-center">
      <div className="flex gap-3 basis-1/2">
        <span className="text-zinc-300">
          <CiSearch size="1.4rem" />
        </span>
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent text-zinc-300 font-normal text-[md]"
          spellCheck={false}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          ref={inputRef}
        />
      </div>
      <div>
        <span className="cursor-pointer text-zinc-300"><FaRegMoon size="1.2rem" /></span>
      </div>
    </div>
  );
};

export default SearchBar;
