import React from 'react'
import renderer from 'react-test-renderer'
import { Deferral } from '../../../lib/form/questions'

describe('form/questions/Deferral', () => {
  it('renders', () => {
    const component = renderer.create(<Deferral />)
    expect(component).toBeDefined()
  })
})
