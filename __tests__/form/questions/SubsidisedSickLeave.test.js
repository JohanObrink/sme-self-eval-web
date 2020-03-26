import React from 'react'
import renderer from 'react-test-renderer'
import { SubsidisedSickLeave } from '../../../lib/form/questions'

describe('form/questions/SubsidisedSickLeave', () => {
  it('renders', () => {
    const component = renderer.create(<SubsidisedSickLeave />)
  })
})
