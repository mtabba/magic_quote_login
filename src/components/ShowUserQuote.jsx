import React, { useEffect, useState } from 'react';
import { saveUserQuotes, getUserQuotes } from '../utils/localStorageOps';
import '../App.css';

const UserQuotes = ({ quotes, searchButton, setSearchButton }) => {
  return (
    <div className="showQuoteContainer">
      {searchButton && (
        <button onClick={() => setSearchButton(false)}>Show All</button>
      )}

      <ul>
        {quotes.map((quote, index) => (
          <li key={index}>{quote}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserQuotes;
