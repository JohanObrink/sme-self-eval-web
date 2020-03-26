import React from 'react'
import renderer from 'react-test-renderer'
import App from '../lib/App'
import { isExportDeclaration } from 'typescript'

describe('App', () => {
  it('renders', () => {
    const component = renderer.create(<App />)
    expect(component).toBeDefined()
  })
})
