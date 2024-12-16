import { useState, useEffect } from "react";

const Wishlist = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:1337/api/wishlists", {
          headers: {
            Authorization: `Bearer ${token}`, // Envoie le token pour récupérer la wishlist de l'utilisateur connecté
          },
        });

        if (!response.ok) {
          throw new Error("Impossible de récupérer votre wishlist.");
        }

        const data = await response.json();
        setWishlist(data.data); // Mettre à jour la wishlist
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
    <>
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Ma Wishlist</h1>
    </div>
    </>
  );
};


export default Wishlist