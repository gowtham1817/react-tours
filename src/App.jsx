
import viteLogo from '/vite.svg'
import './App.css'
import { useState,useEffect } from 'react'
import Tours from './Tours'
import Loading from './Loading'
function App() {
  const URL = 'https://course-api.com/react-tours-project'
    const [loading,setIsLoading] = useState(true)
    const [tours,setTours] = useState([])
    const removeone = (id) =>{

      const data = tours.filter((tour)=>{

         return(
           tour.id !== id
         )
      })
      setTours(data)
   }
    const fetchdata = async()=>{
        setIsLoading(true)
        try{
            const response = await fetch(URL);
            const data = await response.json();
            setTours(data);
            console.log(data)
            // setUsers(data);

        }
        catch(err){

            console.log(err)
        }
        setIsLoading(false);
     }
    useEffect(()=>{
  
      
        fetchdata()
    },[])

    if(loading){
      return (
        <main>
           <Loading />
        </main>
      )
    }
    if(tours.length === 0){
      return (
        <main className='him'>
           <h1>NO TOUR LEFT</h1>
           <button typ='button' className='btn' onClick={()=>fetchdata()}>Refresh</button>
        </main>
      )
    }


    
  return (
    <>
      <main>
          <Tours tours={tours} setTours={setTours} removeone={removeone} />
      </main>
      
      
    </>
  )
}

export default App
