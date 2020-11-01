import React, { useState } from 'react'
import Quiz from './components/Quiz'
import Intro from './components/Intro'
import Stats from './components/Stats'
import shuffleArray from './utils/shuffleArray'

const App = ({ questionData }) => {
  const [status, setStatus] = useState('intro')
  const questions = shuffleArray(questionData)

  const QUIZ_STATES = {
    intro: <Intro setStatus={setStatus} />,
    quiz: <Quiz questions={questions} setStatus={setStatus}/>,
    finished: <Stats setStatus={setStatus} numberOfQuestions={questions.length} />
  }

  return (
    <React.Fragment>
      {QUIZ_STATES[status]}
    </React.Fragment>
  )
}

export default App