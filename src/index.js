import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'theme-ui'
import theme from './theme'
import App from './App'
import questionData from './data/questionData.js'
import { QuizProvider } from './context/quiz-context'

ReactDOM.render(
  <React.StrictMode>
    <QuizProvider>
      <ThemeProvider theme={theme}>
        <App questionData={questionData} />
      </ThemeProvider>
    </QuizProvider>
  </React.StrictMode>,
  document.getElementById('root')
)