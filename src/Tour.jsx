import React, { useState } from 'react'

const Tour = ({id,image,name,info,price,setTours,removeone}) => {
  const [readmore,setReadMore] = useState(false)
  return (
    <article className='design'>
        <img src={image} alt={name} className='img' />
        <span className='price'>{price}</span>
        <div>
            <h5>{name}</h5>
            <p>
              {readmore ? info : `${info.substring(0,195)}...`}
              <br />
              <button className='her' type='button' onClick={()=>setReadMore(!readmore)}>
                 {readmore ?'Show Less' : 'Read More'}
              </button>
            </p>
        </div>
        <button type="button" onClick={()=>removeone(id)} className='btn' >NOT INTERESTED</button>
    </article>
  )
}

export default Tour