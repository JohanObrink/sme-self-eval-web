import React from 'react'
import renderer from 'react-test-renderer'
import { LineOfBusiness } from '../../../lib/form/questions'

describe('form/questions/LineOfBusiness', () => {
  it('renders', () => {
    const component = renderer.create(<LineOfBusiness />)
  })
})
