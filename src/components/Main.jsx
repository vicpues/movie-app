import React from 'react'
import SearchBar from './SearchBar'
import CardContainer from './CardContainer'

const Main = () => {
  return (
    <div className='flex-1 overflow-y-auto dark:bg-[#25292e]'>
      <SearchBar />
      <CardContainer />
    </div>
  )
}

export default Main
