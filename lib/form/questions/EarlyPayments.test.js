import React from 'react'
import renderer from 'react-test-renderer'
import { EarlyPayments } from '../../../lib/form/questions'

describe('form/questions/EarlyPayments', () => {
  it('renders', () => {
    const component = renderer.create(<EarlyPayments />)
    expect(component).toBeDefined()
  })
})
