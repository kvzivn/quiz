import React from 'react'
import { shallow } from 'enzyme'
import Quiz from './Quiz'

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

it('should render a question', () => {
  const wrapper = shallow(<Quiz questions={questionData} />)
  const questionText = wrapper.find('.questionText').text()

  expect(questionText).toEqual(questionData[0].question)
})

it('should update correctAnswers on correct selection', () => {
  const setStatus = jest.fn()
  const wrapper = shallow(<Quiz questions={questionData} setStatus={setStatus} />)
  const correctChoice = wrapper.find('#correct')

  correctChoice.simulate('click')

  // TODO: get correctAnswer from context after click
})