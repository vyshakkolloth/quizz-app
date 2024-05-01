import React, { useState } from 'react'
import { Progress } from "@material-tailwind/react";
import { IconButton } from "@material-tailwind/react";
import { FaMedal } from "react-icons/fa";
import { RxEnterFullScreen } from "react-icons/rx";
import "./navb.css"
import { IconContext } from 'react-icons';

const nav = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
    if (!isFullScreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };
  return (
    <div className='bg-red-400 px-1 flex flex-col w-[100vw] max-h-15'>
      <div className='w-full bg-yellow-200'>
      <Progress value={100}  size="sm"  />
        
      </div> 
        <div className='flex flex-row justify-between align-middle'> 
              <div className="flex gap-1 p-1">
              <IconButton className=''>
              <i className="fas fa-play" />
            </IconButton>
            <IconButton>
              1/4
            </IconButton>
            <div className="progressbar">
              <div style={{
                height: "100%",
                width: `20%`,
                backgroundColor: "#a66cff",
                transition:"width 0.5s"
              }}></div>
              <span className="progressPercent">streak</span>
            </div>
               </div>
               <div className='flex gap-1 flex-row py-1 rounded-md'>
                <div className="flex h-full w-24 justify-center align-middle items-center bg-yellow-300">
                <IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
                <FaMedal />
                </IconContext.Provider>;
                <IconButton onClick={handleFullScreen} >
                <RxEnterFullScreen />
                </IconButton>
                </div>
               </div>
        </div>
    </div>
  )
}

export default nav