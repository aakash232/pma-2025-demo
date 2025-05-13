import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("renders counter and buttons", () => {
  render(<Counter />);
  const counterElement = screen.getByText(/counter: 0/i);
  expect(counterElement).toBeInTheDocument();

  const incrementButton = screen.getByText(/increment/i);
  fireEvent.click(incrementButton);
  expect(screen.getByText(/counter: 1/i)).toBeInTheDocument();
});
