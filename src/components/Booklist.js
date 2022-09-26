import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import NewBook from './NewBook';
import { BookContext } from '../context/BookContext';

const Booklist = () => {
  const { books } = useContext(BookContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);

  const currentTheme = isLightTheme ? light : dark;

  useEffect(() => {}, [books]);

  return (
    <div
      className="book-list"
      style={{ backgroundColor: currentTheme.bg, color: currentTheme.syntax }}
    >
      <ul>
        {books?.map((bl) => (
          <li key={bl.id} style={{ backgroundColor: currentTheme.ui }}>
            {bl.title}
          </li>
        ))}
      </ul>
      <NewBook />
    </div>
  );
};

export default Booklist;
