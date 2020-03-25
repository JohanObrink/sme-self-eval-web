import React from 'react'
import renderer from 'react-test-renderer'
import App from '../lib/App'

describe('App', () => {
  let app
  beforeEach(() => {
    app = renderer.create(<App />)
  })
  it('renders the title', () => {
    const tree = app.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
