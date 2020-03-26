import React from 'react'
import renderer from 'react-test-renderer'
import { ShortTermSavings } from '../../../lib/form/questions'

describe('form/questions/ShortTermSavings', () => {
  it('renders', () => {
    const component = renderer.create(<ShortTermSavings />)
    expect(component).toBeDefined()
  })
})
