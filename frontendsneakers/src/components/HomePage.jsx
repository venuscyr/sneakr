import { useState, useEffect } from "react";

const HomePage = () => {
  const [sneakers, setSneakers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSneakers = async () => {
      try {
        const response = await fetch("http://54.37.12.181:1337/api/sneakers");
        const data = await response.json();
        setSneakers(data.data); // Stocker les sneakers
      } catch (err) {
        setError("Erreur lors de la récupération des données");
      } finally {
        setLoading(false); // Arrêter le chargement
      }
    };

    fetchSneakers();
  }, []);

  const filteredSneakers = sneakers.filter((sneaker) =>
    sneaker.attributes.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Rechercher une sneaker"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredSneakers.map((sneaker) => (
          <div key={sneaker.id} className="p-4 border rounded shadow-md">
            <img
              src={sneaker.attributes.image.small} // Afficher l'image de taille "small"
              alt={sneaker.attributes.name}
              className="h-48 w-full object-contain mb-2"
            />
            <h2 className="text-lg font-bold">{sneaker.attributes.name}</h2>
            <p className="text-gray-600">Brand: {sneaker.attributes.brand}</p>
            <p className="text-gray-600">Price: ${sneaker.attributes.retailPrice}</p>
            <a
              href={sneaker.attributes.links.goat}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View on Goat
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
