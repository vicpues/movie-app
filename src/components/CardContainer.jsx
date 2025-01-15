import React, { useEffect, useState } from 'react'
import Card from './Card';
import loading from '../assets/loading.svg'
// funcs
import { fetchTrendingMovies } from '../API/api';
const CardContainer = () => {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    const fetchTrend = async () =>{
      const data = await fetchTrendingMovies();
      setTrending(data);
    };
    fetchTrend();
  }, [])


  return (
    <div className='p-8'>
      <h1 className='font-semibold text-3xl text-zinc-600'>Discover</h1>
      <div className='flex flex-wrap gap-4 mt-12 justify-center items-center h-[70vh]'>
        { trending.length > 0 ?
          trending.map((item, index) => <Card content={item} key={index}/>)
          :
          <img src={loading} alt="loader" className='w-40' />
        }
      </div>
    </div>
  )
}

export default CardContainer
