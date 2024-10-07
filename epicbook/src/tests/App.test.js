import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import { ThemeProvider } from "../context/ThemeContext";

it("should change the theme on button click", () => {
  render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );

  expect(document.body).toHaveClass("light");

  const buttonElement = screen.getByRole("button", { name: /cambia tema/i });

  fireEvent.click(buttonElement);

  expect(document.body).toHaveClass("dark");
});
