import React, { useEffect, useState } from 'react'
import { Progress } from "@material-tailwind/react";
import { IconButton } from "@material-tailwind/react";
import { FaMedal } from "react-icons/fa";
import { RxEnterFullScreen } from "react-icons/rx";
import "./navb.css"
import { IconContext } from 'react-icons';
import { useSelector } from 'react-redux';
import { FaCoins } from "react-icons/fa6";
const nav = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [progressWidth, setProgressWidth] = useState(0);
  // ===================== progress
  // useEffect(() => {
  //   const startTime = Date.now();
  //   const endTime = startTime + 15000;

  //   const interval = setInterval(() => {
  //     const now = Date.now();
  //     const elapsedTime = now - startTime;
  //     const progress = (elapsedTime / 15000) * 100;
  //     setProgressWidth(progress);

  //     if (now >= endTime) {
  //       clearInterval(interval);
  //     }
  //   }, 1000); // Update every second

  //   return () => clearInterval(interval);
  // }, []);

  // -------------------
  const user = useSelector(state => state.user)
  const ques = useSelector(state => state.questions)
  console.log(ques.length)

// ==================full screen
  const handleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
    if (!isFullScreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };
  // --------------------------


  return (
    <div className=' px-1 flex flex-col w-[100vw] max-h-15'>
      <div className='w-full'>
      <Progress value={progressWidth}  size="sm"  />
        
      </div> 
        <div className='flex flex-row justify-between align-middle'> 
              <div className="flex gap-1 p-1">
              <IconButton className=''>
              <i className="fas fa-play" />
            </IconButton>
            <IconButton>
              {user.question}/{ques.length}
            </IconButton>
            <div className="progressbar">
              <div style={{
                height: "100%",
                width: `50%`,
                backgroundColor: "#a66cff",
                transition:"width 0.5s"
              }}></div>
              <span className="progressPercent">streak</span>
            </div>
               </div>
               <div className='flex gap-1 flex-row py-2 rounded-md'>
                <div className="flex h-full  gap-2 justify-center align-middle items-center bg-brown-600 w-56 rounded-md mr-5">
                <IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
                <FaMedal /> {user.point}
                </IconContext.Provider>|
                <FaCoins />
                </div>
                <IconButton onClick={handleFullScreen} >
                <RxEnterFullScreen />
                </IconButton>
               </div>
        </div>
    </div>
  )
}

export default nav