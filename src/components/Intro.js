/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Grid, Box, Heading, Button } from 'theme-ui'

export default ({ setStatus }) => (
  <Grid sx={{ height: '100vh', placeItems: 'center' }}>
    <Box sx={{ textAlign: 'center' }}>
      <Heading>Welcome to the Jayway Quiz</Heading>

      <Button onClick={() => setStatus('quiz')} sx={{ mt: 6 }}>
        Begin
      </Button>
    </Box>
  </Grid>
)