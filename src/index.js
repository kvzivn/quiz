import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'theme-ui'
import theme from './theme'
import App from './App'
import questionData from './data/questionData.js'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App questionData={questionData} />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)