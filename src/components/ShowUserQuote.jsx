import '../assets/close.svg';
import '../App.css';

const UserQuotes = ({
  quotes,
  searchButton,
  setSearchButton,
  setDeleteItemIndex,
}) => {
  const handleDelete = () => {};
  return (
    <div className="showQuoteContainer">
      <div className="listUserQuote">
        <ul>
          {quotes.map((quote, index) => (
            <li key={index}>
              {quote}
              <button onClick={handleDelete(index)} className="deleteButton">
                x
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="showAllButton">
        {searchButton && (
          <button onClick={() => setSearchButton(false)}>Show All</button>
        )}
      </div>
    </div>
  );
};

export default UserQuotes;
