import React from 'react'
import renderer from 'react-test-renderer'
import { DropInDemand } from '../../../lib/form/questions'

describe('form/questions/DropInDemand', () => {
  it('renders', () => {
    const component = renderer.create(<DropInDemand />)
    expect(component).toBeDefined()
  })
})
