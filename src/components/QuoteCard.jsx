import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { fetchQuotes, getRandomQuote } from '../utils/getQuote';
import '../App.css';

const QuoteCard = () => {
  const REACT_APP_API_URL = 'https://type.fit/api/quotes';
  const [generate, setGenerate] = useState(false);
  const [error, setError] = useState('');
  const [foundInLocal, setFoundInLocal] = useState(true);
  const [quote, setQuote] = useState({
    text: '',
    author: '',
  });
  const quotes = JSON.parse(localStorage.getItem('quotes'));
  useEffect(() => {
    if (!quotes) {
      try {
        const fetchQuotes = async () => {
          const response = await axios.get(REACT_APP_API_URL);
          localStorage.setItem('quotes', JSON.stringify(response.data));
          return response;
        };
        debugger;
        fetchQuotes();
      } catch {
        setError('Something Went Wrong.');
      }
    }
  }, [quotes, foundInLocal]);

  useEffect(() => {
    if (quotes) {
      // console.log(getRandomQuote(), quote);
      const random = getRandomQuote();
      setQuote(random);
      setError('');
    } else {
      setError('Something went wrong');
      setFoundInLocal(false);
    }
  }, [generate]);

  return (
    <div className="magicQuoteContainer">
      {error && <p className="error-message">{error}</p>}

      <p>{quote.text}</p>
      <h4>{quote.author || 'Unknown'}</h4>
      <button onClick={() => setGenerate(!generate)}>Generate Quotes</button>
    </div>
  );
};

export default QuoteCard;
