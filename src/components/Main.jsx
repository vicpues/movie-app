import React from 'react'
import SearchBar from './SearchBar'
import CardContainer from './CardContainer'

const Main = () => {
  return (
    <div className='flex-1 overflow-y-auto'>
      <SearchBar />
      <CardContainer />
    </div>
  )
}

export default Main
