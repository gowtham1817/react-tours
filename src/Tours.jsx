import React, { useState,useEffect } from 'react'
import Tour from './Tour'

const Tours = ({tours,setTours,removeone}) => {
    
  return (
     <section className='sec'>
        <div className='tod'>
           <h1>OUR TOURS</h1>
        </div>
        <div className='gri'>
            {tours.map((tour)=>{
                return(
                    <Tour key={tour.id} setTours={setTours} removeone={removeone} {...tour} />
                )
            })}
        </div>
     </section>
  )
}

export default Tours