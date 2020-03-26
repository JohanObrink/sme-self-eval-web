import React from 'react'
import renderer from 'react-test-renderer'
import { SickLeave } from '../../../lib/form/questions'

describe('form/questions/SickLeave', () => {
  it('renders', () => {
    const component = renderer.create(<SickLeave />)
  })
})
