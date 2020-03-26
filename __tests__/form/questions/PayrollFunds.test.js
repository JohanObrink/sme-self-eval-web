import React from 'react'
import renderer from 'react-test-renderer'
import { PayrollFunds } from '../../../lib/form/questions'

describe('form/questions/PayrollFunds', () => {
  it('renders', () => {
    const component = renderer.create(<PayrollFunds />)
    expect(component).toBeDefined()
  })
})
