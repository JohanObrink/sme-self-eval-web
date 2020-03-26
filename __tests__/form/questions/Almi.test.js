import React from 'react'
import renderer from 'react-test-renderer'
import { Almi } from '../../../lib/form/questions'

describe('form/questions/Almi', () => {
  it('renders', () => {
    const component = renderer.create(<Almi />)
  })
})
