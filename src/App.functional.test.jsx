import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

// This is our functional test - it tests the complete application flow
describe("Application Functional Tests", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("counter increments and decrements correctly through the UI", async () => {
    // Check initial state
    expect(screen.getByText(/counter: 0/i)).toBeInTheDocument();

    // Get the buttons
    const incrementButton = screen.getByTestId("increment-button");
    const decrementButton = screen.getByTestId("decrement-button");

    // Click increment 3 times
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);

    // Verify counter shows 3
    expect(screen.getByText(/counter: 3/i)).toBeInTheDocument();

    // Click decrement once
    fireEvent.click(decrementButton);

    // Verify counter shows 2
    expect(screen.getByText(/counter: 2/i)).toBeInTheDocument();
  });

});
