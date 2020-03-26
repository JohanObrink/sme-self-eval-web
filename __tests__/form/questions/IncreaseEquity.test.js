import React from 'react'
import renderer from 'react-test-renderer'
import { IncreaseEquity } from '../../../lib/form/questions'

describe('form/questions/IncreaseEquity', () => {
  it('renders', () => {
    const component = renderer.create(<IncreaseEquity />)
    expect(component).toBeDefined()
  })
})
