import { createSlice } from "@reduxjs/toolkit";

const initialState={
    question:1,
    correct:0,
    point:0,
    coin:0
}


export const userSlice= createSlice({
    name:"user",
    initialState,
    reducers: {
        questionSubmit:(state,action)=>{

            state.question +=1
            
        },
        correctAnswer:(state,action)=>{
            state.correct +=1
            state.point=state.point+10
        }
    }
})

export const{questionSubmit,correctAnswer}=userSlice.actions

export default userSlice.reducer
