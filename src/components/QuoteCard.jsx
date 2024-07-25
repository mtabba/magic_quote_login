import { useEffect, useState } from 'react';
import axios from 'axios';
// import { getRandomQuote } from '../utils/getQuote';
import '../App.css';

const QuoteCard = () => {
  const REACT_APP_API_URL = 'https://type.fit/api/quotes';
  const [generate, setGenerate] = useState(false);
  const [error, setError] = useState('');
  const [allQuotes, setAllQuotes] = useState([]);
  const [quote, setQuote] = useState({
    text: '',
    author: '',
  });
  useEffect(() => {
    const quotes = JSON.parse(localStorage.getItem('quotes'));
    if (!quotes) {
      const fetchQuotes = async () => {
        try {
          const response = await axios.get(REACT_APP_API_URL);
          localStorage.setItem('quotes', JSON.stringify(response.data));
          setAllQuotes(response.data);
        } catch (error) {
          setError('Something Went Wrong.');
        }
      };
      fetchQuotes();
    } else {
      setAllQuotes(quotes);
    }
  }, []);

  useEffect(() => {
    if (allQuotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * allQuotes.length);
      const randomQuote = allQuotes[randomIndex];
      // --- correction of Author Name ---
      const commaIndex = randomQuote.author.indexOf(',');
      const filteredAuthor =
        commaIndex !== -1
          ? randomQuote.author.substring(0, commaIndex)
          : randomQuote.author;
      let trimmedAuthor = filteredAuthor.trim();
      trimmedAuthor === 'type.fit'
        ? (trimmedAuthor = 'Unknown')
        : (trimmedAuthor = filteredAuthor.trim());

      // --- Setting the Author name modified
      setQuote({
        text: randomQuote.text,
        author: trimmedAuthor,
      });
      setError('');
    } else {
      setError('No quotes available.');
    }
  }, [generate, allQuotes]);

  return (
    <div className="magicQuoteContainer">
      {error && <p className="error-message">{error}</p>}

      <p>{quote.text}</p>
      <h4>{quote.author}</h4>
      <button onClick={() => setGenerate(!generate)}>Generate Quote</button>
    </div>
  );
};

export default QuoteCard;
