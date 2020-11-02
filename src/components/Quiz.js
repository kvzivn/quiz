/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Grid, Flex, Heading, Card, Button } from 'theme-ui'
import { useState, useEffect, useRef } from 'react'
import { useQuizDispatch } from '../context/quiz-context'

export default ({ questions, setStatus }) => {
  const dispatch = useQuizDispatch()
  const timerRef = useRef(null)
  const fiftyFiftyRef = useRef(null)
  const [questionNumber, setQuestionNumber] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(questions[questionNumber])
  const answerTime = 15

  const answer1 = useRef(null)
  const answer2 = useRef(null)
  const answer3 = useRef(null)
  const answer4 = useRef(null)

  const answerRefs = [
    answer1,
    answer2,
    answer3,
    answer4
  ]

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

  const fiftyFifty = () => {
    const wrongAnswers = answerRefs.filter(ref => ref.current.id !== 'correct')
    // hide the first wrong answer
    wrongAnswers[0].current.style.opacity = 0
    // hide one of the other two
    wrongAnswers[Math.floor(Math.random() * 2) + 1].current.style.opacity = 0
    // disable button
    fiftyFiftyRef.current.disabled = true
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
    answerRefs.map(answer => answer.current.style.opacity = 1)

    const restartTimer = setTimeout(() => {
      timerRef.current.style.width = '100%'
    }, answerTime)

    return () => window.clearTimeout(restartTimer)
  }, [currentQuestion])

  const Timer = () => (
    <div ref={timerRef} sx={{
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
        mx: 'auto',
        px: [8, 6],
        'label': {
          marginLeft: '.5rem'
        }
      }}>
        {currentQuestion.answers.map((answer, i) => {
          return (
            <Card
              as="label"
              ref={answerRefs[i]}
              id={currentQuestion.answer === answer ? 'correct' : undefined}
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

      <Button
        ref={fiftyFiftyRef}
        onClick={() => fiftyFifty()}
        sx={{
          maxWidth: '160px',
          mx: 'auto',
          fontSize: 4
        }}
      >
        50/50
      </Button>

      <Timer sx={{ position: 'absolute', bottom: 0 }} />
    </Flex>
  )
}
