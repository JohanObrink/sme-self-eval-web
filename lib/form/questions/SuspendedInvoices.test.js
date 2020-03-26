import React from 'react'
import renderer from 'react-test-renderer'
import { SuspendedInvoices } from '../../../lib/form/questions'

describe('form/questions/SuspendedInvoices', () => {
  it('renders', () => {
    const component = renderer.create(<SuspendedInvoices />)
    expect(component).toBeDefined()
  })
})
