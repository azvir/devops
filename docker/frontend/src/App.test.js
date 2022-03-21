import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders Save to reload string', () => {
  render(<App />);
  const linkElement = screen.getByText(/save to reload/i);
  expect(linkElement).toBeInTheDocument();
});
