import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import 'regenerator-runtime/runtime'
import { render, waitFor, cleanup } from '@testing-library/react'
import FormStep from './FormStep'
import { questionTypes } from './data'

describe('form/FormStep', () => {
  let props
  beforeEach(() => {
    props = {
      headline: 'Headline',
      title: 'Title',
      questions: []
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
  it('renders BUTTON_GROUP question', async () => {
    const question = {
      path: 'why',
      question: 'Why?',
      type: questionTypes.BUTTON_GROUP,
      seed: () => ([])
    }
    props.questions = [question]
    const { getByRole } = render(<FormStep {...props} />)
    await waitFor(() => {
      expect(getByRole('questions')).toHaveTextContent(question.question)
    })
  })
  it('renders DROP_DOWN question', async () => {
    const question = {
      path: 'why',
      question: 'Why?',
      type: questionTypes.DROP_DOWN,
      seed: () => ([])
    }
    props.questions = [question]
    const { getByRole } = render(<FormStep {...props} />)
    await waitFor(() => {
      expect(getByRole('questions')).toHaveTextContent(question.question)
    })
  })
  it('renders YES_NO question', async () => {
    const question = {
      path: 'why',
      question: 'Why?',
      type: questionTypes.YES_NO
    }
    props.questions = [question]
    const { getByRole } = render(<FormStep {...props} />)
    await waitFor(() => {
      expect(getByRole('questions')).toHaveTextContent(question.question)
    })
  })
  it('renders INPUT question[number]', async () => {
    const question = {
      path: 'why',
      question: 'Why?',
      type: questionTypes.INPUT,
      inputType: 'number'
    }
    props.questions = [question]
    const { getByRole } = render(<FormStep {...props} />)
    await waitFor(() => {
      expect(getByRole('questions')).toHaveTextContent(question.question)
    })
  })
})
