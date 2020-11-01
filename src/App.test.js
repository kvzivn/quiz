import * as React from 'react'
import ReactDOM from 'react-dom';
import { unmountComponentAtNode } from 'react-dom'
import { render, screen } from '@testing-library/react'
import App from './App'

const questionData = [
  {
    question: "How many?",
    answer: "10",
    answers: [
      "6",
      "7",
      "10",
      "9"
    ]
  }
]

let container = null

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

it('renders without crashing', () => {
  ReactDOM.render(<App questionData={questionData} />, container)
})

it('initially renders the Intro component', () => {
  render(<App questionData={questionData} />, container)
  expect(screen.getByText('Welcome to the Jayway Quiz')).toBeInTheDocument()
})
