import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState(""); // Pour capturer l'email
  const [password, setPassword] = useState(""); // Pour capturer le mot de passe
  const [error, setError] = useState(""); // Pour afficher une erreur si besoin
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    try {
      const response = await fetch("http://localhost:1337/api/auth/local", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: email,
          password: password,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error.message || "Erreur inconnue");
      }

      const data = await response.json();

      // Enregistre le token dans le localStorage pour une future utilisation
      localStorage.setItem("token", data.jwt);// Token pour les requêtes
      localStorage.setItem("userId", data.user.id); // ID utilisateur pour la wishlist

      // Réinitialise les champs et supprime les erreurs
      setEmail("");
      setPassword("");
      setError("");


      navigate("/HomePage")
    } catch (err) {
      setError(err.message); // Affiche l'erreur si la connexion échoue
    }
  };

  return (
    <>
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Connexion</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-pink-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-pink-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-violet-400 text-white py-2 rounded-md hover:bg-pink-300"
          >
           
            Se connecter
          </button>
           DONT HAVE AN ACCOUNT ? 
          <Link to="/register" className="text-yellow-900 underline"> ALLEZ Y! </Link>
           
        
        </form>
      </div>
    </div>
    </>
    
  );
};

export default Login;
