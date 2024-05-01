import react from 'react'
import {
 
  Route,
  Routes,
} from "react-router-dom";
import Quizz from './pages/quizz';
import Layout from "./layouts/quizzLayouut"

function App() {


  return (
   <>
     <Routes>
      <Route element={<Layout/>}>
        <Route path="/qui" element={<Quizz />} />
        </Route>
      </Routes> 
      
  
   </>
  )
}

export default App
