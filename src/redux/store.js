import { configureStore } from '@reduxjs/toolkit'
import questions from './slices/questionsSlice'
import user from "./slices/user"

const store = configureStore({
  reducer: {
    questions: questions,
    user:user
  },
  })
  
  export default store