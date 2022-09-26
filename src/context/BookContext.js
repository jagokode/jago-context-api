import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const BookContext = createContext();

const initialBooks = [
  { title: 'Jago HTML', id: 1 },
  { title: 'Jago CSS', id: 2 },
  { title: 'Jago Javascript', id: 3 },
  { title: 'Jago ReactJS', id: 4 },
];

const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState(initialBooks);

  const addBook = (title) => {
    setBooks([...books, { title, id: uuidv4() }]);
  };

  return (
    <BookContext.Provider value={{ books, addBook }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
