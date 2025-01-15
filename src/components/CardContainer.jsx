import React from 'react'
import Card from './Card'
const CardContainer = () => {
  return (
    <div className='p-8'>
      <h1 className='font-semibold text-3xl text-zinc-600'>Discover</h1>
      <div className='flex flex-wrap gap-4 mt-12'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default CardContainer
