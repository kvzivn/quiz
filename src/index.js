import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'theme-ui'
import theme from './theme'
import Quiz from './Quiz'

const questionData = [
  {
    question: "How many studios does the Jayway organisation consist of?",
    answer: "9",
    answers: [
      "6",
      "7",
      "10",
      "9"
    ]
  },
  {
    question: "What type of development is the cornerstone of Jayway?",
    answer: "Competence",
    answers: [
      "Financial",
      "Competence",
      "Cultural",
      "Intellectual"
    ]
  },
  {
    question: "Which value is not part of Jayways core values?",
    answer: "Technology for People",
    answers: [
      "Humble Brilliance.",
      "Be the change.",
      "Technology for People",
      "Respectful Autonomy."
    ]
  }
]

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Quiz questionData={questionData} />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)