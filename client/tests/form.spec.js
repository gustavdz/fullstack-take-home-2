import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "../App";

test("Get the initial state of the button as disabled", () => {
  const { getByText, getByLabelText } = render(<App />);
  const bounds = getByLabelText(/Bounds/i).closest("input");
  const curPosition = getByLabelText(/Current Position/i).closest("input");
  const moves = getByLabelText(/Moves/i).closest("input");

  expect(bounds.value).toBe("");
  expect(curPosition.value).toBe("");
  expect(moves.value).toBe("");
  expect(getByText(/Get New Position/i).closest("button")).toBeDisabled();
});

test("Get the final state of the button as enabled", () => {
  const { getByText, getByLabelText } = render(<App />);
  const bounds = getByLabelText(/Bounds/i).closest("input");
  const curPosition = getByLabelText(/Current Position/i).closest("input");
  const moves = getByLabelText(/Moves/i).closest("input");

  fireEvent.change(bounds, { target: { value: "5 5" } });
  fireEvent.change(curPosition, { target: { value: "1 2 N" } });
  fireEvent.change(moves, { target: { value: "LMLMLMLMM" } });
  expect(getByText(/Get New Position/i).closest("button")).not.toBeDisabled();
});
