import { useState } from "react";
import { Link,useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:1337/api/auth/local/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        navigate("/Login")
      } else {
        console.error("Erreur :", data);
        alert("Erreur : " + data.error.message);
      }
    } catch (error) {
      
      alert("Erreur réseau : " + error.message);
    }
    
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="p-6 bg-white rounded shadow-md space-y-4"
      >
        <h2 className="text-xl font-semibold text-gray-700">Register</h2>
        <div>
          <label htmlFor="username" className="block text-sm text-gray-600">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-violet-400 text-white py-2 rounded hover:bg-green-300 transition"
        >
          Register
        </button>
        ALREADY HAVE AN ACCOUNT ? 
        <Link to="/login" className="text-orange-600 underline">LETS GO!</Link>
      </form>
    </div>
  );
};

export default Register;
