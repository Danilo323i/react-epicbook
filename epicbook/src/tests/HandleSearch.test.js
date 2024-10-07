import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import MyNavbar from "../components/MyNavbar/MyNavbar";
import { BookProvider } from "../context/BooksContext";
import { MemoryRouter } from "react-router-dom";

const booksMock = [
  {
    asin: "1",
    title: "The Last Wish: Introducing the Witcher",
    category: "Fantasy",
    price: 9.99,
  },
  { asin: "2", title: "Sword of Destiny", category: "Fantasy", price: 10.39 },
];

it("should filter the books when typing in the search bar", () => {
  const searchBooksMock = jest.fn();

  render(
    <MemoryRouter>
      <BookProvider>
        <MyNavbar />
      </BookProvider>
    </MemoryRouter>
  );

  const searchInput = screen.getByPlaceholderText("Search for books");

  fireEvent.change(searchInput, { target: { value: "Witcher" } });

  expect(searchInput.value).toBe("Witcher");
});
