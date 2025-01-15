import React, { useEffect, useState } from 'react'
import Card from './Card';

// funcs
import { fetchTrendingMovies } from '../API/api';
const CardContainer = () => {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    const fetchTrend = async () =>{
      const data = await fetchTrendingMovies();
      setTrending(data);
      console.log(trending)
    };
    fetchTrend();
  }, [])


  return (
    <div className='p-8'>
      <h1 className='font-semibold text-3xl text-zinc-600'>Discover</h1>
      <div className='flex flex-wrap gap-4 mt-12'>
        { trending.length > 0 ?
          trending.map((item, index) => <Card content={item} key={index}/>)
          :
          null
        }
      </div>
    </div>
  )
}

export default CardContainer
