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
      debugger;
      fetchQuotes();
    } else {
      setAllQuotes(quotes);
    }
  }, []);

  useEffect(() => {
    if (allQuotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * allQuotes.length);
      const randomQuote = allQuotes[randomIndex];
      setQuote({
        text: randomQuote.text,
        author: randomQuote.author || 'Unknown',
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

// ?/////////////////////////////////////////////////////////////////////////////////////
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { getRandomQuote } from '../utils/getQuote';
// import '../App.css';

// const QuoteCard = () => {
//   const REACT_APP_API_URL = 'https://type.fit/api/quotes';
//   const [generate, setGenerate] = useState(false);
//   const [error, setError] = useState('');
//   const [allQuotes, setAllQuotes] = useState({});
//   const [quote, setQuote] = useState({
//     text: '',
//     author: '',
//   });
//   const quotes = JSON.parse(localStorage.getItem('quotes'));
//   useEffect(() => {
//     if (!quotes) {
//       try {
//         const fetchQuotes = async () => {
//           const response = await axios.get(REACT_APP_API_URL);
//           localStorage.setItem('quotes', JSON.stringify(response.data));
//           setAllQuotes(response.data);
//           return response;
//         };
//         debugger;
//         fetchQuotes();
//       } catch {
//         setError('Something Went Wrong.');
//       }
//     }
//   }, [quotes]);

//   useEffect(() => {
//     if (quotes) {
//       // console.log(getRandomQuote(), quote);
//       // const random = getRandomQuote();
//       console.log(allQuotes);
//       const random = [Math.floor(Math.random() * allQuotes.quotes.length)];
//       setQuote(random);
//       setError('');
//     } else {
//       setError('Something went wrong');
//     }
//   }, [generate]);

//   return (
//     <div className="magicQuoteContainer">
//       {error && <p className="error-message">{error}</p>}

//       <p>{quote.text}</p>
//       <h4>{quote.author || 'Unknown'}</h4>
//       <button onClick={() => setGenerate(!generate)}>Generate Quotes</button>
//     </div>
//   );
// };

// export default QuoteCard;
