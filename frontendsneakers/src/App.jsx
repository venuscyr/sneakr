import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import HomePage from './components/HomePage';
import Wishlist from './components/Wishlist';

function App() {
  return (
    <div className="min-h-screen flex flex-col"> {/* Conteneur principal */}
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/wishlist" element={<Wishlist />} /> 
      </Routes>
    </Router>
    </div>
  );
}

export default App;  
