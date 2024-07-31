import { useState } from 'react';
import { UserContext } from './UserContext';

const UserProvider = ({ children }) => {
  const [userQuotes, updateUserData] = useState([]);
  const setUserQuotes = (data) => {
    updateUserData(data);
  };

  return (
    <UserContext.Provider value={[userQuotes, setUserQuotes]}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
