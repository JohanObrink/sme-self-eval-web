import React from 'react'
import renderer from 'react-test-renderer'
import { ShortTermLayoffs } from '../../../lib/form/questions'

describe('form/questions/ShortTermLayoffs', () => {
  it('renders', () => {
    const component = renderer.create(<ShortTermLayoffs />)
    expect(component).toBeDefined()
  })
})
