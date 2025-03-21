'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Bootcamp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "ultrafitness@gmail.com" && password === "ultrafitness") {
      router.push("/login"); 
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="border-2 border-gray-700 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-white text-center">Admin Login</h2>
        {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
        <form onSubmit={handleLogin} className="mt-6">
          <div>
            <label className="block text-gray-300">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mt-1 rounded bg-gray-700 text-white focus:outline-none"
              required
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-300">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mt-1 rounded bg-gray-700 text-white focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg"
          >
            Login
          </button>
          </form>
          <p className="text-center mt-5 text-[0.7rem] text-gray-500">{'Designed by "Nandan R"'}</p>        
      </div>
    </div>
  );
}
