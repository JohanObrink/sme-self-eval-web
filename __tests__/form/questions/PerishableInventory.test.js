import React from 'react'
import renderer from 'react-test-renderer'
import { PerishableInventory } from '../../../lib/form/questions'

describe('form/questions/PerishableInventory', () => {
  it('renders', () => {
    const component = renderer.create(<PerishableInventory />)
    expect(component).toBeDefined()
  })
})
