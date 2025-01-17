import React, { useEffect, useState } from 'react'
import Card from './Card';
import loading from '../assets/loading.svg'
// funcs
import { fetchMovies } from '../API/api';
import { useSelector, useDispatch } from 'react-redux';
import { setMovies } from '../Store/Features/MoviesList';
const CardContainer = () => {
  const moviesData = useSelector((state) => state.MovieList);
  const itemQuery = useSelector((state) => state.ListSearch);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchTrend = async () =>{
      if(itemQuery === "trending"){
        const data = await fetchMovies(itemQuery)
        dispatch(setMovies(data))
      }
    };
    fetchTrend();
  }, ["", itemQuery]);


  return (
    <div className='p-8'>
      <h1 className='font-semibold text-3xl text-zinc-600'>{itemQuery.slice(0,1).toUpperCase()+itemQuery.slice(1)}</h1>
      <div className='wrapper_card flex flex-wrap gap-4 mt-12 justify-center items-center h-[70vh]'>
        { moviesData.length > 0 ?
          moviesData.map((item, index) => <Card content={item} key={index}/>)
          :
          <img src={loading} alt="loader" className='w-40' />
        }
      </div>
    </div>
  )
}

export default CardContainer
