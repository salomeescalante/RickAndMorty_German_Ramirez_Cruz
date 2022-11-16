import React from 'react'
import { useState } from 'react'

const Search = ({ setNumber, numRandom }) => {
  const [search, setSearch] = useState('')

  
  const handdleInput = e => {
    e.preventDefault()

    if(e.target.value == '' ){
      setSearch(e.target.search.value)
      setNumber(numRandom)

    }else{
      setSearch(e.target.search.value)
      setNumber(e.target.search.value)
    }
  }

  return (
    <form onSubmit={handdleInput}>
      <div className='searchContainer'>
        <input id='search' className='input' type='number' placeholder='Search a location by #' />
      </div>
    </form>
  )
}

export default Search