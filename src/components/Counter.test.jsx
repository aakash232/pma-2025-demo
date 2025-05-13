import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('renders counter and buttons', () => {
  render(<Counter />);
  const counterElement = screen.getByText(/counter: 0/i);
  expect(counterElement).toBeInTheDocument();
  
  const incrementButton = screen.getByTestId('increment-button');
  fireEvent.click(incrementButton);
  expect(screen.getByText(/counter: 1/i)).toBeInTheDocument();
});

test('decrement button decreases counter', () => {
  render(<Counter />);
  const decrementButton = screen.getByTestId('decrement-button');
  
  // First increment to 1
  const incrementButton = screen.getByTestId('increment-button');
  fireEvent.click(incrementButton);
  expect(screen.getByText(/counter: 1/i)).toBeInTheDocument();
  
  // Then decrement back to 0
  fireEvent.click(decrementButton);
  expect(screen.getByText(/counter: 0/i)).toBeInTheDocument();
});