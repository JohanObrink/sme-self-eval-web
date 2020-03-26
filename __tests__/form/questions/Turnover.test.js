import React from 'react'
import renderer from 'react-test-renderer'
import { Turnover } from '../../../lib/form/questions'

describe('form/questions/Turnover', () => {
  it('renders', () => {
    const component = renderer.create(<Turnover />)
    expect(component).toBeDefined()
  })
})
