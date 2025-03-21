"use client";

import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Link from "next/link";

const AdminDashboard = () => {
  const [member, setMember] = useState({
    name: "",
    email: "",
    mobile: "",
    age: "",
    membership: ""
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    
    const response = await fetch("/api/add-member", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(member),
    });
    
    if (response.ok) {
      setMessage("Member added successfully!");
      setMember({ name: "", email: "", mobile: "", age: "", membership: "" });
    } else {
      setError("Failed to add member.");
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-gray-900 shadow-lg rounded-lg mt-[10vh]">
      <h2 className="text-xl font-bold mb-5 text-white mt-10">Add Member</h2>
      {message && <p className="text-green-400 mb-4">{message}</p>}
      {error && <p className="text-red-400 mb-4">{error}</p>}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={member.name}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 text-white"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={member.email}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 text-white"
          required
        />
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          value={member.mobile}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 text-white"
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={member.age}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 text-white"
          required
        />
        <select
          name="membership"
          value={member.membership}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 text-white"
          required
        >
          <option value="">Select Plan</option>
          <option value="999">1 Month - ₹999</option>
          <option value="2399">3 Months - ₹2,399</option>
          <option value="5999">12 Months - ₹5,999</option>
          <option value="9999">For Couple : 1Yr - ₹9999</option>
          <option value="1999">Personal Training - ₹1999</option>
        </select>
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white font-bold rounded-lg"
        >
          Add Member
        </button>
      </form>
      
      <div className="flex justify-between mt-4">
        <Link href="/members-list" className="px-4 py-2 bg-gray-700 text-white rounded-lg">
          View Members
        </Link>
        <Link href="/login" className="px-4 py-2 bg-gray-700 text-white rounded-lg">
          Dashboard
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
