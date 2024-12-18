import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();

  const isAuthenticated = localStorage.getItem("authToken"); // Vérifie si l'utilisateur est connecté

  const handleNavigate = (path) => {
    navigate(path); // Redirection vers la route choisie
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Bienvenue sur notre site !</h1>
      <div className="flex space-x-4">
        {/* Bouton vers la Home */}
        <button
          onClick={() => handleNavigate("/HomePage")}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Aller au Home
        </button>

        {/* Bouton vers Login, masqué si l'utilisateur est connecté */}
        {!isAuthenticated && (
          <button
            onClick={() => handleNavigate("/login")}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Se connecter
          </button>
        )}

        {/* Si l'utilisateur est connecté, bouton Déconnexion */}
        {isAuthenticated && (
          <button
            onClick={() => {
              localStorage.clear(); // Supprime les données utilisateur
              handleNavigate("/login"); // Retourne vers la page Login
            }}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          >
            Déconnexion
          </button>
        )}
      </div>
    </div>
  );
};

export default WelcomePage;
