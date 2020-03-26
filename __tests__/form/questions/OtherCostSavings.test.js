import React from 'react'
import renderer from 'react-test-renderer'
import { OtherCostSavings } from '../../../lib/form/questions'

describe('form/questions/OtherCostSavings', () => {
  it('renders', () => {
    const component = renderer.create(<OtherCostSavings />)
    expect(component).toBeDefined()
  })
})
