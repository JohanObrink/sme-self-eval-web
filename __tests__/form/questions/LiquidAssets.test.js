import React from 'react'
import renderer from 'react-test-renderer'
import { LiquidAssets } from '../../../lib/form/questions'

describe('form/questions/LiquidAssets', () => {
  it('renders', () => {
    const component = renderer.create(<LiquidAssets />)
    expect(component).toBeDefined()
  })
})
