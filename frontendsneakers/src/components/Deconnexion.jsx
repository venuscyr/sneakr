import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    localStorage.clear();
    
    
    navigate("/login");
    
  };

  return (
    <div className="flex content-end"> 
    <button
      onClick={handleLogout}
      className=" bg-yellow-300 text-white py-2 px-4 rounded hover:bg-yellow-400"
    >
      SE DECONNECTER
    </button>
    </div>
  );
};

export default LogoutButton;
