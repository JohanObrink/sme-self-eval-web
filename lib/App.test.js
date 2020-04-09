import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, waitFor, cleanup } from '@testing-library/react';
import App from '../lib/App';

describe('App', () => {
  afterEach(() => cleanup());
  it('renders', async () => {
    const { container } = render(<App />);
    await waitFor(() => {
      expect(container).toBeVisible();
    });
  });
});
