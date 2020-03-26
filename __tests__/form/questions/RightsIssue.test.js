import React from 'react'
import renderer from 'react-test-renderer'
import { RightsIssue } from '../../../lib/form/questions'

describe('form/questions/RightsIssue', () => {
  it('renders', () => {
    const component = renderer.create(<RightsIssue />)
  })
})
