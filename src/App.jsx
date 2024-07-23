import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserProvider from './contexts/UserProvider';
import LoginSignUp from './pages/LoginSignUp';
import NavBar from './components/Navbar';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Routes>
         
        <Route path="/" element={
        <UserProvider>
         <Home />
         </UserProvider> } />
        <Route path="/Home/:id" element={<UserProvider>
          <Home /></UserProvider>} />
        <Route path="/Login/:id" element={<UserProvider>
          <LoginSignUp /></UserProvider>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
