import { useState, useEffect } from "react";

const AddToWishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [error, setError] = useState("");

  const loadWishlist = () => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  };

  useEffect(() => {
    loadWishlist();

    const handleStorageChange = () => {
      loadWishlist();
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    setError("");
  };

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl bg-red-400 font-bold mb-4">Ma Wishlist</h1>

      {wishlist.length === 0 ? (
        <p>Votre wishlist est vide.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="p-4 border rounded shadow-md flex flex-col"
            >
              <img
                src={item.attributes.image?.small || "https://via.placeholder.com/150"}
                alt={item.attributes.name || "Image indisponible"}
                className="h-48 w-full object-contain mb-2"
              />
              <h2 className="text-lg font-bold">
                {item.attributes.name || "Nom indisponible"}
              </h2>
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="bg-red-500 text-white px-2 py-1 mt-4 rounded"
              >
                Retirer de la wishlist
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddToWishlist;
