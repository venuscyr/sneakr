import { useState, useEffect } from "react";

const AddToWishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWishlist = async () => {
      const token = localStorage.getItem("token"); // Récupérer le token utilisateur
      if (!token) {
        setError("Vous devez être connecté pour accéder à votre wishlist.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch("http://localhost:1337/api/wishlists", {
          headers: {
            Authorization: `Bearer ${token}`, // Authentification avec le token
          },
        });

        if (!response.ok) {
          throw new Error("Impossible de récupérer votre wishlist.");
        }

        const data = await response.json();
        setWishlist(data.data); // Mettre à jour la wishlist avec les données reçues
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWishlist();
  }, []);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Ma Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>Votre wishlist est vide.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {wishlist.map((item) => (
            <div key={item.id} className="p-4 border rounded shadow-md">
              <h2 className="text-lg font-bold">Sneaker ID : {item.attributes.sneakerId}</h2>
              <p className="text-gray-600">Ajouté le : {new Date(item.attributes.createdAt).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddToWishlist;
