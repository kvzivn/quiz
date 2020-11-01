/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Grid, Flex, Box, Heading, Card } from 'theme-ui'
import { useState, useEffect, useRef} from 'react'
import { useQuizDispatch } from '../context/quiz-context'

export default ({ questions, setStatus }) => {
  const dispatch = useQuizDispatch()
  const timerRef = useRef(null)
  const [questionNumber, setQuestionNumber] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(questions[questionNumber])
  const answerTime = 5

  const checkAnswer = e => {
    if (e.target.value === currentQuestion.answer) {
      dispatch({ type: 'correct' })
    }

    gotoNextQuestion()
  }

  const gotoNextQuestion = () => {
    if (questionNumber >= questions.length - 1) {
      setStatus('finished')
    } else {
      setQuestionNumber(questionNumber + 1)
    }
  }

  // start countdown
  useEffect(() => {
    setCurrentQuestion(questions[questionNumber])
    timerRef.current.style.width = '100%'

    const countDown = setTimeout(() => {
      gotoNextQuestion()
    }, `${answerTime}000`)

    return () => window.clearTimeout(countDown)
  }, [questionNumber])

  // restart timer on question change
  useEffect(() => {
    const restartTimer = setTimeout(() => {
      timerRef.current.style.width = '100%'
    }, answerTime)

    return () => window.clearTimeout(restartTimer)
  }, [currentQuestion])

  const Timer = () => (
    <Box ref={timerRef} sx={{
      width: 0,
      height: '8vh',
      backgroundColor: 'primary',
      transition: `width ${answerTime}s linear`
    }} />
  )

  return (
    <Flex as="main" sx={{
      position: 'relative',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100vh',
      pt: '6rem'
    }}>
      <Heading as="h1" className="questionText" sx={{
        mx: [6, 'auto'],
        fontSize: ['18px', '20px', '2.5vw'],
        textAlign: 'center'
      }}>
        {currentQuestion.question}
      </Heading>

      <Grid columns={[1, 1, 2]} gap={8} sx={{
        mt: '-4rem',
        mx: 'auto',
        px: [8, 6],
        fontSize: '20px',
        'label': {
          marginLeft: '.5rem'
        }
      }}>
        {currentQuestion.answers.map((answer, i) => {
          return (
            <Card
              as="label"
              id={currentQuestion.answer === answer && 'correct'}
              data-testid={i}
              htmlFor={i}
              key={i}
            >
              <input
                type="radio"
                id={i}
                value={answer}
                name="question"
                onClick={e => checkAnswer(e)}
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
            </Card>
          )
        })}
      </Grid>

      <Timer sx={{ position: 'absolute', bottom: 0 }} />
    </Flex>
  )
}
