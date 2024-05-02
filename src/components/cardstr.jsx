import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { questionSubmit, correctAnswer } from "../redux/slices/user";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const cardstr = ({ index, answer, clicked, setclicked }) => {
  const dispatch = useDispatch();
  const ques = useSelector((state) => state.questions);
  const { question } = useSelector((state) => state.user);


  const [condition, setcondition] = useState(false);
  let a = ["bg-blue-500", "bg-cyan-500", "bg-yellow-800", "bg-pink-700"];
  
  return (
    <div
      key={index}
      onClick={(e) => {
        setclicked(true);
        dispatch(questionSubmit());
        if (answer.isCorrect) {
          setcondition(true);
          dispatch(correctAnswer());

          // handleReload()
        } else {
        }
        setTimeout(() => {
          setcondition(false);
          setclicked(false);
        }, 1000);
      }}
      className={`${
        clicked ? (answer?.isCorrect ? "bg-green-500" : "bg-red-500") : a[index]
      } rounded-md flex justify-center items-center relative hover:animate-pulse `}
    >
      <div className="text-white  top-2 right-2 absolute   bg-blue-gray-300 bg-opacity-20 glass rounded-sm shadow-2xl shadow-black  h-8 w-8 text-center ">
        {index + 1}
      </div>
      {answer.text}
    </div>
  );
};

export default cardstr;
