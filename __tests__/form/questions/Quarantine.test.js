import React from 'react'
import renderer from 'react-test-renderer'
import { Quarantine } from '../../../lib/form/questions'

describe('form/questions/Quarantine', () => {
  it('renders', () => {
    const component = renderer.create(<Quarantine />)
  })
})
