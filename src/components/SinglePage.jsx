import React from 'react'
// ICONS
import { MdArrowBackIosNew } from "react-icons/md";
const SinglePage = () => {
  return (
    <div className='p-8'>
      <div className='flex gap-2 items-center cursor-pointer'>
        <MdArrowBackIosNew />
        <h3>Back</h3>
      </div>
      <div className='mt-8 px-8 flex gap-8'>
        <div className='w-[28%] h-[80vh]'>
            <img src={"https://image.tmdb.org/t/p/w500/xZngif5riLClwUBYuAp2qyLH6pp.jpg"} className='w-full h-full rounded-lg' alt="poster" />
        </div>
        <div className='p-4 flex-1'>
            <h2 className='font-semibold text-4xl'>Thor: God of Thunder</h2>
            <div className='flex gap-4 text-[#24428D] ml-1 mt-2 text-lg'>
                <p>2022 |</p>
                <p>En |</p>
                <p>16+</p>
            </div>
            <div className='mt-12 w-[75%]'>
                <h4 className='text-2xl text-[#24428D] font-semibold mb-4'>Overview</h4>
                <p className='text-lg leading-8'>Thor's villainous brother Loki has escaped Asgard to search for Yggdrasil — The Tree of the Nine Realms. The tree holds the power of the Universe, and is secreted away on Earth. With the help of giant wolf god Fenrir, Loki plans to destroy the tree and replant it in his image, giving him dominion over all. Now Thor must follow Loki to Earth to wage an epic battle that will hold the two worlds in its balance.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePage
