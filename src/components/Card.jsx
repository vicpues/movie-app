import React from 'react'

const Card = ({ content }) => {
    let img = `https://image.tmdb.org/t/p/w500${content.poster_path}`
  return (
    <div className='w-[18%]'>
      <img src={img} alt="" className='w-full h-[400px] rounded-lg object-cover'/>
      <div>
        <h3 className='mt-3 font-semibold text-lg'>{content.original_title}</h3>
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
        {/* <div className='mt-2'>
          <p className='text-zinc-500 hover:underline cursor-pointer'>Learn More</p>
        </div> */}
      </div>
    </div>
  )
}

export default Card
