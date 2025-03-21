"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // ✅ Import Next.js router

const MembersList = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter(); // ✅ Initialize router

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const response = await fetch("/api/get-members");

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const text = await response.text();
      console.log("Raw API Response:", text);

      const data = text ? JSON.parse(text) : [];
      console.log("Fetched Members:", data);

      setMembers(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching members:", error);
      setLoading(false);
    }
  };

  const handleRenew = async (id) => {
    try {
      const response = await fetch(`/api/renew-member/${id}`, {
        method: "POST",
      });
      if (response.ok) {
        alert("Membership renewed successfully!");
        fetchMembers();
      } else {
        alert("Failed to renew membership.");
      }
    } catch (error) {
      console.error("Error renewing membership:", error);
    }
  };

  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <p className="text-white text-center">Loading members...</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto bg-gray-900 shadow-lg rounded-lg mt-10">
      {/* ✅ Dashboard Button */}

      <h2 className="text-xl font-bold mb-4 text-white text-center">Members List</h2>

      {/* ✅ Search Input */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 p-2 rounded bg-gray-800 text-white"
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          onClick={() => setSearchQuery("")} 
        >
          Reset
        </button>
      </div>

      <table className="w-full text-white border-collapse">
        <thead>
          <tr className="border-b border-gray-600">
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Mobile</th>
            <th className="p-2">Plan</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredMembers.map((member) => (
            <tr key={member.id} className="border-b border-gray-700 text-center">
              <td className="p-2">{member.name}</td>
              <td className="p-2">{member.email}</td>
              <td className="p-2">{member.mobile}</td>
              <td className="p-2">{member.plan}</td>
              <td className="p-2">
                <button
                  onClick={() => handleRenew(member.id)}
                  className="px-4 py-1 bg-blue-500 text-white rounded-lg"
                >
                  Renew
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {filteredMembers.length === 0 && (
        <p className="text-center text-gray-400 mt-4">No members found.</p>
      )}

      <button
        onClick={() => router.push("/dashboard")}
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded-lg mt-8 flex justify-center w-full"
      >
        Go to Dashboard
      </button>
    </div>
  );
};

export default MembersList;
