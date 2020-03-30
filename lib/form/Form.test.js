import React from 'react'
import { render, waitFor, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import 'regenerator-runtime/runtime'

import Form from './Form'

describe('form/Form', () => {
  let props
  beforeEach(() => {
    props = {
      form: {
        steps: []
      },
      stepIndex: 0
    }
  })
  afterEach(() => cleanup())
  describe('empty form', () => {
    it('renders', () => {
      expect(() => render(<Form {...props} />)).not.toThrow()
    })
  })
  describe('navigation', () => {
    beforeEach(() => {
      props.form.steps = [
        { title: 'Step 1' },
        { title: 'Step 2' },
        { title: 'Step 3' },
      ]
    })
    it('shows next but not prev on first step', async () => {
      props.stepIndex = 0
      const { getAllByRole } = render(<Form {...props} />)
      await waitFor(() => {
        expect(getAllByRole('button')).toHaveLength(1)
        expect(getAllByRole('button')[0]).toHaveTextContent('Nästa')
      })
    })
    it('shows both on second step', async () => {
      props.stepIndex = 1
      const { getAllByRole } = render(<Form {...props} />)
      await waitFor(() => {
        expect(getAllByRole('button')).toHaveLength(2)
        expect(getAllByRole('button')[0]).toHaveTextContent('Tidigare')
        expect(getAllByRole('button')[1]).toHaveTextContent('Nästa')
      })
    })
    it('shows prev but and finish on last step', async () => {
      props.stepIndex = 2
      const { getAllByRole } = render(<Form {...props} />)
      await waitFor(() => {
        expect(getAllByRole('button')).toHaveLength(2)
        expect(getAllByRole('button')[0]).toHaveTextContent('Tidigare')
        expect(getAllByRole('button')[1]).toHaveTextContent('Slutför')
      })
    })
  })
})
