import React, {useRef, useState} from "react";
// ICONS
import { CiSearch } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";
// redux
import { useSelector, useDispatch } from "react-redux";
import { setQuery } from "../Store/Features/SingleQuery";
import {setItem} from '../Store/Features/ListSearch'
import { getData } from "../API/api";
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const moviesData = useSelector((state) => state.ListSearch);
  const searchQuery = useSelector((state) => state.SingleQuery);
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const searchMovie = (name) => {
    dispatch(setQuery(name));
    console.log(`Get the search query: ${name}`)
    searchQuery !== "" && dispatch(setItem("discover"))
    const fetchData = async () =>{
      const response = await getData(searchQuery);
      console.log(response)
    };
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); 
      if (searchTerm.trim() !== "") {
        searchMovie(searchTerm);
        setSearchTerm(""); 
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
