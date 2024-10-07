import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import MainSection from "../components/MainSection/MainSection";
import { BookProvider } from "../context/BooksContext";
import { MemoryRouter } from "react-router-dom";

const booksMock = [
  {
    asin: "1",
    title: "The Last Wish: Introducing the Witcher",
    img: "img1.jpg",
    category: "fantasy",
    price: 10,
  },
  {
    asin: "2",
    title: "Sword of Destiny (The Witcher)",
    img: "img2.jpg",
    category: "horror",
    price: 15,
  },
];

it("should select a card and apply selected Bootstrap classes", () => {
  const useBooksMock = jest.fn(() => ({ books: booksMock }));

  render(
    <MemoryRouter>
      <BookProvider value={useBooksMock}>
        <MainSection />
      </BookProvider>
    </MemoryRouter>
  );

  const firstCard = screen.getByText("The Last Wish: Introducing the Witcher");

  fireEvent.click(firstCard);

  const cardElement = firstCard.closest(".card");
  expect(cardElement).toHaveClass("bg-danger");
  expect(cardElement).toHaveClass("text-white");
});

it("should deselect the first card when a second card is selected", () => {
  const useBooksMock = jest.fn(() => ({ books: booksMock }));

  render(
    <MemoryRouter>
      <BookProvider value={useBooksMock}>
        <MainSection />
      </BookProvider>
    </MemoryRouter>
  );

  const firstCard = screen.getByText("The Last Wish: Introducing the Witcher");
  const secondCard = screen.getByText("Sword of Destiny (The Witcher)");

  fireEvent.click(firstCard);

  const firstCardElement = firstCard.closest(".card");
  expect(firstCardElement).toHaveClass("bg-danger");
  expect(firstCardElement).toHaveClass("text-white");

  fireEvent.click(secondCard);

  expect(firstCardElement).not.toHaveClass("bg-danger");
  expect(firstCardElement).not.toHaveClass("text-white");

  const secondCardElement = secondCard.closest(".card");
  expect(secondCardElement).toHaveClass("bg-danger");
  expect(secondCardElement).toHaveClass("text-white");
});
