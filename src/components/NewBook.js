import { useContext, useState } from 'react';
import { BookContext } from '../context/BookContext';

const NewBook = () => {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState('');

  const addNewBook = (e) => {
    e.preventDefault();
    addBook(title);
    setTitle('');
  };

  return (
    <form onSubmit={addNewBook}>
      <label>Book Title:</label>
      <input
        type="text"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input type="submit" value="Add Book" />
    </form>
  );
};

export default NewBook;
