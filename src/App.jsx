import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardResident from './components/CardResident'
import LocationInfo from './components/LocationInfo'



function App() {


  const [location, setLocation] = useState()
  const [searchInput, setSearchInput] = useState ('')


  useEffect(() => {

    let numberLocation 
    if (searchInput === ''){
      numberLocation = Math.floor(Math.random() * (126 - 1) + 1)
    } else {
      numberLocation = searchInput
    }


    const URL = `https://rickandmortyapi.com/api/location/${numberLocation}`
    axios.get(URL)
      .then(res => setLocation(res.data))
      .catch(err => console.log(err))
    
  }, [searchInput])
  

  const handleSubmit = e => {
    e.preventDefault()

    setSearchInput(e.target.search.value)

  }

  

  return (
    <div className="App">

      

      <h1 className="title"></h1>
      <form className="search" onSubmit={handleSubmit}>
        <input id='search' type="text" placeholder='Type a location id' />
        <button className='btn_search'>Search</button>
      </form>
      <LocationInfo location={location} />
      <div className='container_resident'>
        {
          location?.residents.map(url => (
            <CardResident
              key={url}
              url={url}
            />

          ))
        }
      </div>
    </div>
    
        
  )
}



export default App
