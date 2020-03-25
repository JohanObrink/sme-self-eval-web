import React from 'react'
import { shallow } from 'enzyme'
import App from '../lib/App'

describe('App', () => {
  let app
  beforeEach(() => {
    app = shallow(<App />)
  })
  it('renders the title', () => {
    expect(app.find('h1').exists()).toBe(true)
  })
})
