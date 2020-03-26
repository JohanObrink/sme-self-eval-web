import React from 'react'
import renderer from 'react-test-renderer'
import { RenegotiateContracts } from '../../../lib/form/questions'

describe('form/questions/RenegotiateContracts', () => {
  it('renders', () => {
    const component = renderer.create(<RenegotiateContracts />)
  })
})
