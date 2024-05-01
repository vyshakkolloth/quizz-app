import React from 'react'


const quizz = () => {
  return (
    <div className='bg-pink-900 w-100vw h-full p-2 border-2 rounded-lg flex-col'>
      <div className='bg-blue-800 h-2/4 flex justify-center  items-center'>
        questioins

      </div>
      <div className='bg-orange-500 grid grid-cols-4 gap-1 h-2/4 p-1 '>
        <div className='bg-brown-600 rounded-md flex justify-center items-center'>Answer 1</div>
        <div className='bg-brown-600 rounded-md flex justify-center items-center'>Answer 2</div>
        <div className='bg-brown-600 rounded-md flex justify-center items-center'>Answer 3</div>
        <div className='bg-brown-600 rounded-md flex justify-center items-center'>Answer 4</div>


      </div>
    </div>
  )
}

export default quizz