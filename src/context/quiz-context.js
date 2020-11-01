import React from 'react'

const QuizStateContext = React.createContext()
const QuizDispatchContext = React.createContext()

const quizReducer = (state, action) => {
  switch (action.type) {
    case 'correct':
      return { correctAnswers: state.correctAnswers + 1 }
    case 'reset':
      return { correctAnswers: 0 }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

const QuizProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(quizReducer, { correctAnswers: 0 })

  return (
    <QuizStateContext.Provider value={state}>
      <QuizDispatchContext.Provider value={dispatch}>
        {children}
      </QuizDispatchContext.Provider>
    </QuizStateContext.Provider>
  )
}

const useQuizState = () => React.useContext(QuizStateContext)
const useQuizDispatch = () => React.useContext(QuizDispatchContext)

export { QuizProvider, useQuizState, useQuizDispatch }