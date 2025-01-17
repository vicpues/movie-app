import React from 'react'
import placeholder from '../assets/placeholder.png'
const Card = ({ content }) => {
  let img;
  if(content.poster_path === null){
    img = placeholder;
  }else{
    img = `https://image.tmdb.org/t/p/w500${content.poster_path}`
  }
  return (
    <div className='m-card w-[18%] hover:scale-105 transition duration-150 ease-out cursor-pointer' >
      <img src={img} alt="" className='w-full h-[400px] rounded-lg object-cover'/>
      <div>
        <h3 className='mt-3 font-semibold text-lg leading-5'>{content.original_title}</h3>
        <div className='mt-2 flex flex-col'>
            <div className='flex gap-2'>
                <h3 className='text-[#0929AD] text-sm'>Relase Date:</h3>
                <p className='text-sm'>{content.release_date.slice(0,4)}</p>
            </div>
            <div className='flex gap-2'>
                <h3 className='text-[#0929AD] text-sm'>Duration:</h3>
                <p className='text-sm'>139m</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Card
