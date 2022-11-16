import axios from "axios"
import { useState, useEffect } from "react"



const useFetch = (url, second) => {
  
   const [response, setResponse] = useState() 

   useEffect(() => {
     axios.get(url) 
     .then(res => setResponse(res.data))
     .catch(err => console.log(err))
   
     
   }, [second])

   return response
   
}

export default useFetch