import React from 'react'
import renderer from 'react-test-renderer'
import { CurrentLiabilities } from '../../../lib/form/questions'

describe('form/questions/CurrentLiabilities', () => {
  it('renders', () => {
    const component = renderer.create(<CurrentLiabilities />)
  })
})
