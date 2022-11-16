import React, {useState} from 'react'
import ResidentInfo from './ResidentInfo'
import LocationInfo from './LocationInfo'
import Pagination from './Pagination'

const CardsBox = ({ planet, number }) => {
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(3)


    const maximum = Math.ceil(planet.residents.length / perPage)
  
  console.log(planet.residents)

  return (
    <div id='cardsBox'>
      <section id='cardContainer'>
        <Location planet={planet} />
        {planet && planet.residents.slice(
          (page -1) * perPage,
          (page -1) * perPage + perPage
        ).map((resident) =>
          <ResidentInfo key={resident} resident={resident} number={number} />)}
      </section>
      <Pagination page={page} setPage={setPage} maximum={maximum}/>
    </div>
  )
}

export default CardsBox