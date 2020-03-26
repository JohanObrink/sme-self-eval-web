import React from 'react'
import renderer from 'react-test-renderer'
import { ProductionMaterial } from '../../../lib/form/questions'

describe('form/questions/ProductionMaterial', () => {
  it('renders', () => {
    const component = renderer.create(<ProductionMaterial />)
    expect(component).toBeDefined()
  })
})
