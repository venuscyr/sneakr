import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import HomePage from './components/HomePage';
import Wishlist from './components/Wishlist';
import ProfilPage from './components/ProfilPage';
import WelcomePage from "./components/WelcomePage";
import Deconnexion from './components/Deconnexion';


function App() {
  return (
    <div className="min-h-screen flex flex-col"> {/* Conteneur principal */}
    <Router>
      <NavBar />
      <div className="flex-grow">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/ProfilPage" element={<ProfilPage />} /> 
        <Route path="/Deconnexion" element={<Deconnexion />} />
      </Routes>
      </div>
      
    </Router>
    </div>
  );
}

export default App;  
