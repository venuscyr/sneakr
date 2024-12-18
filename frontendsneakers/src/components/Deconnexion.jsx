import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Vider tout le localStorage
    localStorage.clear();
    
    // Redirection vers la page de connexion
    navigate("/login");
    
  };

  return (
    <div className="flex content-end"> 
    <button
      onClick={handleLogout}
      className=" bg-yellow-200 text-white py-2 px-4 rounded hover:bg-yellow-400"
    >
      SE DECONNECTER
    </button>
    </div>
  );
};

export default LogoutButton;
