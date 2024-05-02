import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-tailwind/react';


const landing = () => {
  return (
    <div className='bg- bg-pink-400 w-screen h-screen flex justify-center items-center flex-col gap-2'>
    <Link to="/quiz">
     {/* <Button onClick={()=> navigate("/qui")}>  start</Button> */}
     <Button>  start</Button>
     </Link> 
     <Link to="/addQuestions">
     <Button> Add questions </Button>
     </Link>
    </div>
  )
}

export default landing