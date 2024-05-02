import React, { useState } from 'react'
import Cardstr from './cardstr'

const cards = ({data}) => {
 

    const [clicked, setclicked] = useState(false)
    
  return (
    <div data-aos="fade-up"
    data-aos-duration="3000" className=' grid grid-cols-4 gap-1 h-2/4 p-1 '>

    {data?.answers?.map((answer,index) => ( 
        <Cardstr key={index} answer={answer} index={index} clicked={clicked} setclicked={setclicked}/>
   ))}
 


    </div>
  )
}

export default cards