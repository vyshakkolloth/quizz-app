import { createSlice } from '@reduxjs/toolkit'
const initialState = 
   [
    {
      id: 1,
      questionText: "What is the capital of France?",
      answers: [
        { id: 1, text: "Paris", isCorrect: true },
        { id: 2, text: "London", isCorrect: false },
        { id: 3, text: "Berlin", isCorrect: false },
        { id: 4, text: "Rome", isCorrect: false }
      ]
    },
    {
      id: 2,
      questionText: "Which planet is closest to the Sun?",
      answers: [
        { id: 1, text: "Mercury", isCorrect: true },
        { id: 2, text: "Venus", isCorrect: false },
        { id: 3, text: "Earth", isCorrect: false },
        { id: 4, text: "Mars", isCorrect: false }
      ]
    }
    // Add more questions as needed
  ]

export const counterSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    addnew:(state,action)=>{
      const { id, questionText, answers } = action.payload;
      state.questions.push({
        id,
        questionText,
        answers
      });
      },
   
  
  }
})

// Action creators are generated for each case reducer function
export const { addnew } = counterSlice.actions

export default counterSlice.reducer