import react from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/slices/questions'
function App() {

  const count = useSelector((state) => state.questions.value)
  const dispatch = useDispatch()

  return (
   <>
   df
   </>
  )
}

export default App
