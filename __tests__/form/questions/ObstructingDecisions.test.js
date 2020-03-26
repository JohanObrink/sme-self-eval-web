import React from 'react'
import renderer from 'react-test-renderer'
import { ObstructingDecisions } from '../../../lib/form/questions'

describe('form/questions/ObstructingDecisions', () => {
  it('renders', () => {
    const component = renderer.create(<ObstructingDecisions />)
    expect(component).toBeDefined()
  })
})
