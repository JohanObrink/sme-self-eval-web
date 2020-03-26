import React from 'react'
import renderer from 'react-test-renderer'
import { CurrentFunds } from '../../../lib/form/questions'

describe('form/questions/CurrentFunds', () => {
  it('renders', () => {
    const component = renderer.create(<CurrentFunds />)
    expect(component).toBeDefined()
  })
})
