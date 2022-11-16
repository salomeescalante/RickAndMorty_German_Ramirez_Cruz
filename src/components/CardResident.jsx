import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import useFetch from '../hooks/useFetch'

const CardResident = ({ url, resident, number }) => {

  const [user, setUser] = useState(resident)
  const [bgColor, setBgColor] = useState("")

  const resident = useFetch(url, user)

  useEffect(() => {
    if(resident.status === "Alive"){
      return setBgColor("green");
    } else {
      return setBgColor("yellow")
    }
  }, [resident]
  )

  return (

    <article className='rectangle'>

      <header>

        <img src={resident?.image} alt={`image of ${resident?.name}`} />


      </header>

      <div className='resident'>

        <h3>{resident?.name}</h3>
        <div>
          <div className="circle"></div>
          <span>{resident?.status}</span>
        </div>
        <ul className='resident_info'>
          <li><span>Species: </span>
            {resident?.species}
          </li>
          <li><span>Origin: </span>
            {resident?.origin.name}
          </li>
          <li><span>Episodes where appear: </span>
            {resident?.episode.length}
          </li>
        </ul>
      </div>

    </article>


  )
}


export default CardResident;

