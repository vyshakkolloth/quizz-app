import React from 'react'


const score = () => {
  return (
    <div className='flex-row flex justify-center bg-pink-900 '>
    <div className="container mx-auto mt-10 w-2/5">
    <div className="mx-auto bg-black rounded-xl overflow-hidden shadow-lg p-9">
        {/* User Details */}
        <div className="flex items-center p-4">
            {/* User Image */}
            <div className="mr-4">
                <img className="w-14 h-14 rounded-full" src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User Image" />
            </div>
            {/* User Name */}
            <div>
                <div className="font-bold text-white text-4xl">John Doe</div>
            </div>
        </div>
        <div className="p-12">
            <img src="https://static.vecteezy.com/system/resources/previews/003/703/565/non_2x/futuristic-digital-surface-space-blank-gray-black-color-background-with-white-grid-space-line-color-surfaces-vector.jpg" alt="" />
        </div>
        <div className="flex w-full gap-4 p-5">
            <div className="flex flex-col items-center justify-center border rounded-md shadow-lg w-full">
                <p className="text-gray-200 text-sm">Rank</p>
                <div>
                    <h1 className="text-3xl text-white">9/22</h1>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center border w-full rounded-md shadow-lg">
                <p className="text-gray-200 text-sm">Score</p>
                <div>
                    <h1 className="text-3xl text-white">922</h1>
                </div>
            </div>
        </div>
        {/* Buttons */}
        <div className="space-y-3 justify-between gap-4 p-4">
            <button className="bg-purple-600 text-white font-bold w-full py-2 px-4 rounded">Play Again</button>
            <button className="bg-white hover:bg-green-700 text-black font-bold w-full py-2 px-4 rounded">Find a New Quiz</button>
        </div>
        <div className="text-white w-full">
            <h1 className="text-center text-xl">Performance Status</h1>
        </div>
        {/* Answer Count */}
        <div className="flex justify-between p-8">
            <div className="text-3xl text-white">Correct Answers: <span className="font-bold">10</span></div>
            <div className="text-3xl text-white">Incorrect Answers: <span className="font-bold">3</span></div>
        </div>
    </div>
</div>
</div>
  )
}

export default score