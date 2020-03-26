import React from 'react'
import renderer from 'react-test-renderer'
import { SubsidisedShortTermLayoffs } from '../../../lib/form/questions'

describe('form/questions/SubsidisedShortTermLayoffs', () => {
  it('renders', () => {
    const component = renderer.create(<SubsidisedShortTermLayoffs />)
  })
})
