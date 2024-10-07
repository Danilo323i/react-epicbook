import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import MainSection from '../components/MainSection/MainSection';  
import { BookProvider } from '../context/BooksContext';  
import { MemoryRouter } from 'react-router-dom';


const booksMock = [
  { asin: '1', title: 'The Last Wish: Introducing the Witcher', img: 'img1.jpg', category: 'Fantasy', price: 9.99 },
  { asin: '2', title: 'Sword of Destiny', img: 'img2.jpg', category: 'Fantasy', price: 10.39 },
];

it('should display the books correctly when loaded', () => {
  const useBooksMock = jest.fn(() => ({ books: booksMock }));

  render(
    <MemoryRouter>
      <BookProvider value={useBooksMock}>
        <MainSection />
      </BookProvider>
    </MemoryRouter>
  );

  // Verifica se i titoli dei libri mockati sono presenti nel documento usando una funzione matcher flessibile
  booksMock.forEach((book) => {
    expect(screen.getByText((content, element) => content.includes(book.title))).toBeInTheDocument();
  });
});
