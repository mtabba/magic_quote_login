import React, { useEffect, useState } from 'react';
import { fetchQuotes, getRandomQuote } from '../utils/getQuote';
import '../App.css';

const QuoteCard = () => {
  const [generate, setGenerate] = useState(false);
  const [quote, setQuote] = useState({
    text: '',
    author: '',
  });

  useEffect(() => {
    fetchQuotes();
  }, [generate]);

  let quote1 = {
    text: 'Magic Quote',
    author: 'Author',
  };

  return (
    <div className="magicQuoteContainer">
      <p>{quote1.text}</p>
      <h3>{quote1.author || 'Unknown'}</h3>
      <button onClick={() => setGenerate(!generate)}>Generate Quotes</button>
    </div>
  );
};

export default QuoteCard;
