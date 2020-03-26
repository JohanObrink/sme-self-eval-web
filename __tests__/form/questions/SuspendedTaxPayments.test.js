import React from 'react'
import renderer from 'react-test-renderer'
import { SuspendedTaxPayments } from '../../../lib/form/questions'

describe('form/questions/SuspendedTaxPayments', () => {
  it('renders', () => {
    const component = renderer.create(<SuspendedTaxPayments />)
  })
})
