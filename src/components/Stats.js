/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Grid, Flex, Heading, Text, Button } from 'theme-ui'
import { useQuizState, useQuizDispatch } from '../context/quiz-context'

export default ({ setStatus, numberOfQuestions }) => {
  const quizState = useQuizState()
  const dispatch = useQuizDispatch()
  const correctAnswers = quizState.correctAnswers

  const reset = () => {
    dispatch({ type: 'reset' })
    setStatus('quiz')
  }

  const getPercentage = () => (
    Math.round((correctAnswers / numberOfQuestions) * 100)
  )

  const getQuizSummary = () => {
    if (getPercentage() >= 85) {
      return 'Nailed it.'
    } else if (getPercentage() < 85 && getPercentage() >= 33) {
      return 'Meh.'
    } else {
      return 'Do you even work at Jayway?'
    }
  }

  return (
    <Grid sx={{
      height: '100vh',
      placeItems: 'center'
    }}>
      <Flex sx={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '400px'
       }}>
        <Heading sx={{ fontSize: '6rem', fontWeight: '700' }}>
          {`${getPercentage()}`}%
        </Heading>

        <Heading sx={{ fontSize: ['2.5rem', '3rem', '3.5rem'] }}>
          {getQuizSummary()}
        </Heading>

        <Text sx={{ fontSize: ['1.5rem', '1.75rem'] }}>
          Correct answers: {correctAnswers} out of {numberOfQuestions}
        </Text>

        <Button onClick={() => reset()}>Play again!</Button>
      </Flex>
    </Grid>
  )
}
