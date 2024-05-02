import React from 'react'
import {
 
    Link,
    Route,
    Routes,
  } from "react-router-dom";
  import Layout from "../layouts/quizzLayouut"
  import Quizz from "../pages/quizz"
  import Score from '../pages/score';
  import AddQuestions from "../pages/addQuestions"

const quizzRoute = () => {
  return (
    <>
     <Routes>
      <Route element={<Layout/>}>

        <Route path="/quiz" element={<Quizz />} />


        </Route>
        <Route path="/score" element={<Score/>}/>
        <Route path="/addQuestions" element={AddQuestions}/>
      </Routes> 
    </> 
  )
}

export default quizzRoute