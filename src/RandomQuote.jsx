import React, { useState } from 'react';



const RandomQuote = ({ quotes }) => {
  const [quote, setQuote] = useState('');

  // Функция для выбора рандомной цитаты
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div>
      <button onClick={getRandomQuote}>Показать цитату</button>
      <p>{quote}</p>
    </div>
  );
};

export default RandomQuote;
