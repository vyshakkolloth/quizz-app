import React, { useEffect, useState } from "react";
import { IconButton } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import Cards from "../components/cards";
import { useNavigate } from "react-router-dom";
const quizz = () => {
  const [data, setdata] = useState([]);
  const navigate=useNavigate()
  const ques = useSelector((state) => state.questions);
  const { question } = useSelector((state) => state.user);

  useEffect(() => {
    function filterQuestionById(ques, id) {
      let val = ques.find((item) => item.id == id);
      setdata(val);
      return val;
    }

    const filteredQuestion = filterQuestionById(ques, question);
    // console.log(filteredQuestion;
    
    if(question>ques.length){
      navigate("/score")
    }
  }, [question]);

  return (
    <div data-aos="zoom-in" className="bg-pink-900 w-100vw h-full p-2 border-2 rounded-lg flex-col">
      <div className="h-2/4 flex justify-center  items-center">
        <p>{data?.questionText}</p>
      </div>
      <Cards data={data} />
    </div>
  );
};

export default quizz;
