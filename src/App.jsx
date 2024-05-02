import react, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import {
  Link,
  Route,Routes
} from "react-router-dom";
import AOS from 'aos';
// import Quizz from './pages/quizz';
// import Layout from "./layouts/quizzLayouut"
import Routess from "./routes/quizzRoute"
import Landing from "./pages/landing"

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
const navigate= useNavigate()
  return (
   <>
  
   <Routes>
     

        <Route path="/"    element={<Landing />} />
        <Route path="/*" exact element={<Routess />} />
  
      </Routes>  
    
      
  
   </>
  )
}

export default App
