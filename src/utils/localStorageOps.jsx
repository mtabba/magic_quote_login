export const saveUserQuotes = (userName, quotes) => {
  localStorage.setItem(userName, JSON.stringify(quotes));
};

export const getUserQuotes = (email) => {
  return JSON.parse(localStorage.getItem(email)) || [];
};
export const saveUserSession = (user, data) => {
  localStorage.setItem(user, JSON.stringify(data));
};

export const getUserSession = (user) => {
  return JSON.parse(localStorage.getItem(user));
};

export const clearUserSession = () => {
  localStorage.removeItem('user');
};
