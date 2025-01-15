import React from 'react'

const Card = () => {
    let img = "https://i.pinimg.com/736x/0f/7d/1f/0f7d1fc66bd72ffacc0d955d49320a23.jpg"
  return (
    <div className='w-[18%]'>
      <img src={img} alt="" className='w-full h-[400px] rounded-lg object-cover'/>
      <div>
        <h3 className='mt-3 font-semibold text-lg'>Superman vs Batman</h3>
        <div className='mt-2 flex flex-col'>
            <div className='flex gap-2'>
                <h3 className='text-[#0929AD] text-sm'>Relase Date:</h3>
                <p className='text-sm'>2013</p>
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
