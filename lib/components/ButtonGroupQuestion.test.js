import React from 'react'
import { render, waitFor, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import 'regenerator-runtime/runtime'

import ButtonGroupQuestion from './ButtonGroupQuestion'

describe('components/ButtonGroupQuestion', () => {
  let props, data
  beforeEach(() => {
    data = []
    props = {
      question: 'Why?',
      value: '',
      seed: () => data,
      onChange: () => {}
    }
  })
  describe('empty seed', () => {
    it('render with empty seed', () => {
      expect(() => render(<ButtonGroupQuestion {...props} />)).not.toThrow()
    })
    it('renders the question', async () => {
      const { getByRole } = render(<ButtonGroupQuestion {...props} />)
      await waitFor(() => {
        expect(getByRole('heading')).toHaveTextContent(props.question)
      })
    })
  })
  describe('with data', () => {
    beforeEach(() => {
      data = [
        {label: 'First', value: 'first'},
        {label: 'Second', value: 'second'},
        {label: 'Third', value: 'third'},
        {label: 'Fourth', value: 'fourth'},
        {label: 'Fifth', value: 'fifth'}
      ]
    })
    it('renders', () => {
      expect(() => render(<ButtonGroupQuestion {...props} />)).not.toThrow()
    })
    it('renders the question', async () => {
      const { getByRole } = render(<ButtonGroupQuestion {...props} />)
      await waitFor(() => {
        expect(getByRole('heading')).toHaveTextContent(props.question)
      })
    })
    it('renders the buttons', async () => {
      const { getAllByRole } = render(<ButtonGroupQuestion {...props} />)
      await waitFor(() => {
        expect(getAllByRole('button')).toHaveLength(data.length)
      })
    })
  })
})
