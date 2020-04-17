import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, waitFor, cleanup } from '@testing-library/react'
import FormStep from './FormStep'
import { questionTypes } from './data'

describe('form/FormStep', () => {
  let props
  beforeEach(() => {
    props = {
      data: {},
      dispatch: jest.fn(),
      headline: 'Headline',
      title: 'Title',
      questions: [],
    }
  })
  afterEach(() => cleanup())
  it('renders title and headline', async () => {
    const { getAllByRole, baseElement } = render(<FormStep {...props} />)
    await waitFor(() => {
      expect(getAllByRole('heading')).toHaveLength(2)
      expect(baseElement).toHaveTextContent(props.title)
      expect(baseElement).toHaveTextContent(props.headline)
    })
  })
  it('renders YES_NO question', async () => {
    const question = {
      path: 'why',
      question: 'Why?',
      type: questionTypes.YES_NO,
    }
    props.questions = [question]
    const { getByRole } = render(<FormStep {...props} />)
    await waitFor(() => {
      expect(getByRole('group')).toHaveTextContent(question.question)
    })
  })
})
