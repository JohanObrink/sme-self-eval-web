import React from 'react'
import renderer from 'react-test-renderer'
import { Reconstruction } from '../../../lib/form/questions'

describe('form/questions/Reconstruction', () => {
  it('renders', () => {
    const component = renderer.create(<Reconstruction />)
    expect(component).toBeDefined()
  })
})
