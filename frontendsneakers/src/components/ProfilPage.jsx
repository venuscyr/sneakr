import { useState, useEffect } from "react";

const Profile = () => {
  const [user, setUser] = useState(null); 
  
  const [error, setError] = useState(""); 

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token"); 
      if (!token) {
        setError("Vous devez être connecté pour voir votre profil.");
       
        return;
      }

      try {
        const response = await fetch("http://localhost:1337/api/users/me", {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });

        if (!response.ok) {
          throw new Error("Impossible de récupérer vos informations.");
        }

        const data = await response.json();
        setUser(data); 
      } catch (err) {
        setError(err.message);
      } 
    };

    fetchUser();
  }, []);

 
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Profil Utilisateur</h1>
      {user ? (
        <div className="border p-4 rounded bg-blue-300 shadow-md">
          <p>
            <strong>ID :</strong> {user.id}
          </p>
          <p>
            <strong>Nom d'utilisateur :</strong> {user.username}
          </p>
          <p>
            <strong>Email :</strong> {user.email}
          </p>
          <p>
            <strong>Date de création :</strong> {new Date(user.createdAt).toLocaleDateString()}
          </p>
        </div>
      ) : (
        <p>Aucune information disponible.</p>
      )}
    </div>
  );
};

export default Profile;
