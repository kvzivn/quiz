/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Grid, Box, Heading, Button } from 'theme-ui'
import { useRef, useEffect } from 'react'

export default ({ setStatus }) => {
  const containerRef = useRef(null)

  useEffect(() => {
    containerRef.current.style.opacity = 1
  }, [])

  return (
    <Grid ref={containerRef} sx={{
      height: '100vh',
      placeItems: 'center',
      opacity: 0,
      transition: 'opacity 1s ease-in-out',
      transitionDelay: '.75s'
    }}>
      <Box sx={{ textAlign: 'center' }}>
        <Heading sx={{ fontSize: '2.5rem'}}>
          Welcome to the Jayway Quiz
        </Heading>

        <Button onClick={() => setStatus('quiz')} sx={{ mt: 8 }}>
          Begin
        </Button>
      </Box>
    </Grid>
  )
}