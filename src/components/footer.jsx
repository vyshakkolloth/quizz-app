import React, { useEffect, useState } from 'react'
import { IconButton } from "@material-tailwind/react";
import { IoMusicalNotesSharp } from "react-icons/io5";


const footer = () => {
    const [audio] = useState(new Audio('quiz_bg2.mp3'));

    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        if (isPlaying) {
            audio.play();
        } else {
            audio.pause();
        }

        return () => {
            audio.pause();
            audio.currentTime = 0;
        };
    }, [isPlaying]);

    const togglePlayback = () => {
        setIsPlaying(!isPlaying);
    };
  return (
    <div className='p-3 flex flex-row justify-start'>
     <IconButton onClick={togglePlayback}>
     <IoMusicalNotesSharp  />

    </IconButton>

    </div>
  )
}

export default footer