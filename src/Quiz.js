/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Grid } from 'theme-ui'
import React, { useState, useEffect, useRef} from 'react'
import shuffleArray from './utils/shuffleArray'

const Quiz = ({ questionData }) => {
  const timerRef = useRef(null)
  const [questions, setQuestions] = useState(shuffleArray(questionData))
  const [questionNumber, setQuestionNumber] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(questions[questionNumber])
  const [selectedAnswer, setSelectedAnswer] = useState("")
  const [isFinished, setIsFinished] = useState(false)
  const answerTime = 15

  const handleChange = e => {
    if (questionNumber >= questions.length - 1) {
      setIsFinished(true)
    } else {
      setQuestionNumber(questionNumber + 1)
    }
  }

  useEffect(() => {
    timerRef.current.style.width = '100%'
    timerRef.current.style.backgroundColor = 'red'

    setCurrentQuestion(questions[questionNumber])
  }, [questionNumber])

  return isFinished ? (
    <h1>YOU FINISHED LOL</h1>
  ) : (
    <React.Fragment>
      <div ref={timerRef} sx={{
        height: 10,
        width: 0,
        marginBottom: '4rem',
        backgroundColor: 'green',
        transition: `width ${answerTime}s linear, background-color ${answerTime}s ease-in-out`
      }} />

      <Container>
        <h1 sx={{ textAlign: 'center' }}>{currentQuestion.question}</h1>

        <Grid columns={[1, 2]} gap={8} sx={{
          maxWidth: '600px',
          margin: '4rem auto',
          paddingLeft: '4rem',
          fontSize: '20px',
          'label': {
            marginLeft: '.5rem'
          }
        }}>
          {currentQuestion.answers.map((answer, i) => {
            return (
              <div key={i}>
                <input
                  type="radio"
                  id={i}
                  value={answer}
                  name="question"
                  onChange={e => handleChange(e)}
                />
                <label htmlFor={i}>{answer}</label>
              </div>
            )
          })}
        </Grid>
      </Container>
    </React.Fragment>
  )
}

export default Quiz