import React from 'react'
import renderer from 'react-test-renderer'
import App from '../lib/App'

describe('App', () => {
  it('renders', () => {
    const component = renderer.create(<App />)
  })
})
