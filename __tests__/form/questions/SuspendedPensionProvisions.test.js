import React from 'react'
import renderer from 'react-test-renderer'
import { SuspendedPensionProvisions } from '../../../lib/form/questions'

describe('form/questions/SuspendedPensionProvisions', () => {
  it('renders', () => {
    const component = renderer.create(<SuspendedPensionProvisions />)
  })
})
