/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Grid, Box, Heading, Card } from 'theme-ui'
import React, { useState, useEffect, useRef} from 'react'

export default ({ questions, setStatus }) => {
  const timerRef = useRef(null)
  const [questionNumber, setQuestionNumber] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(questions[questionNumber])
  const [selectedAnswer, setSelectedAnswer] = useState("")
  const answerTime = 15

  const handleChange = e => {
    if (questionNumber >= questions.length - 1) {
      setStatus('finished')
    } else {
      setQuestionNumber(questionNumber + 1)
    }
  }

  useEffect(() => {
    timerRef.current.style.width = '100%'

    setCurrentQuestion(questions[questionNumber])
  }, [questionNumber])

  return (
    <React.Fragment>
      <Box ref={timerRef} sx={{
        height: '40px',
        width: 0,
        backgroundColor: 'primary',
        transition: `width ${answerTime}s linear`
      }} />

      <Heading sx={{ mt: 10, textAlign: 'center' }}>
        {currentQuestion.question}
      </Heading>

      <Grid columns={[1, 2]} gap={8} sx={{
        maxWidth: '800px',
        mt: 8,
        mx: 'auto',
        fontSize: '20px',
        'label': {
          marginLeft: '.5rem'
        }
      }}>
        {currentQuestion.answers.map((answer, i) => {
          return (
            <label htmlFor={i} key={i} sx={{
              width: '100%',
              boxShadow: '0 20px 30px 0 rgba(79,79,79,.1)',
              backgroundColor: 'white',
              fontSize: 3,
              borderRadius: '8px',
              p: 10,
              textAlign: 'center',
              fontSize: 3,
              cursor: 'pointer',
              transition: 'transform .15s ease-in-out, font-size .15s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
              }
            }}>
              <input
                type="radio"
                id={i}
                value={answer}
                name="question"
                onChange={e => handleChange(e)}
                sx={{
                  clip: 'rect(0 0 0 0)',
                  clipPath: 'inset(50%)',
                  height: '1px',
                  overflow: 'hidden',
                  position: 'absolute',
                  whiteSpace: 'nowrap',
                  width: '1px'
                }}
              />
              {answer}
            </label>
          )
        })}
      </Grid>
    </React.Fragment>
  )
}