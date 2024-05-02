import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addnew } from "../redux/slices/questionsSlice"; // Import your slice's action


const addQuestions = () => {
    const dispatch = useDispatch();

  const [questionText, setQuestionText] = useState('');
  const [answerTexts, setAnswerTexts] = useState(['', '', '', '']);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(0);
  const handleQuestionTextChange = (e) => {
    setQuestionText(e.target.value);
  };

  const handleAnswerTextChange = (e, index) => {
    const newAnswerTexts = [...answerTexts];
    newAnswerTexts[index] = e.target.value;
    setAnswerTexts(newAnswerTexts);
  };

  const handleCorrectAnswerChange = (index) => {
    setCorrectAnswerIndex(index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create answers array
    const answers = answerTexts.map((text, index) => ({
      id: index + 1,
      text,
      isCorrect: index === correctAnswerIndex
    }));

    // Dispatch addnew action
    dispatch(addnew({
      id: Math.floor(Math.random() * 1000), // Generate a random ID (replace with your logic)
      questionText,
      answers
    }));

    // Reset form fields
    setQuestionText('');
    setAnswerTexts(['', '', '', '']);
    setCorrectAnswerIndex(0);
  };
  return (
    <div><form onSubmit={handleSubmit}>
    <label>
      Question Text:
      <input type="text" value={questionText} onChange={handleQuestionTextChange} />
    </label>
    <br />
    {answerTexts.map((answerText, index) => (
      <div key={index}>
        <label>
          Answer {index + 1}:
          <input type="text" value={answerText} onChange={(e) => handleAnswerTextChange(e, index)} />
        </label>
        <input
          type="radio"
          name="correctAnswer"
          checked={index === correctAnswerIndex}
          onChange={() => handleCorrectAnswerChange(index)}
        />
        Correct Answer
        <br />
      </div>
    ))}
    <button type="submit">Add Question</button>
  </form></div>
  )
}

export default addQuestions