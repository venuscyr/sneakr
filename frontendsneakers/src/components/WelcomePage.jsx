import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();

  const isAuthenticated = localStorage.getItem("authToken"); 

  const handleNavigate = (path) => {
    navigate(path); 
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Bienvenue sur notre site !</h1>
      <div className="flex space-x-4">
        
        <button
          onClick={() => handleNavigate("/HomePage")}
          className="bg-blue-400 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Aller au Home
        </button>

        
        {!isAuthenticated && (
          <button
            onClick={() => handleNavigate("/login")}
            className="bg-green-400 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Se connecter
          </button>
        )}

        
      </div>
    </div>
  );
};

export default WelcomePage;
