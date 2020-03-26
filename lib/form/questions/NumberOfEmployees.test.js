import React from 'react'
import renderer from 'react-test-renderer'
import { NumberOfEmployees } from '../../../lib/form/questions'

describe('form/questions/NumberOfEmployees', () => {
  it('renders', () => {
    const component = renderer.create(<NumberOfEmployees />)
    expect(component).toBeDefined()
  })
})
