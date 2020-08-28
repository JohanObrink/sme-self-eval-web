import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, waitFor, cleanup } from '@testing-library/react'
import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()

import App from '../lib/App'

describe('App', () => {
  beforeEach(() => {
    fetch.mockResponse(JSON.stringify({}))
  })
  afterEach(() => {
    fetch.resetMocks()
    cleanup()
  })
  it('renders', async () => {
    const { container } = render(<App />)
    await waitFor(() => {
      expect(container).toBeVisible()
    })
  })
})
