"use client";
import { useState } from 'react';

export default function User() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Function to handle search
  const handleSearch = () => {
    // Here you would implement your logic to fetch users by username from your data source
    // For demonstration purposes, let's assume users is an array of objects with 'username' property
    const filteredUsers = users.filter(user =>
      user.username.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredUsers);
  };

  return (
    <div>
      <h2>Search Users</h2>
      <input
        type="text"
        placeholder="Enter username..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />&nbsp;
      <button onClick={handleSearch}>Search</button>
      <div>
        {/* Display search results */}
        {searchResults.map(user => (
          <div key={user.id}>{user.username}</div>
        ))}
      </div>
    </div>
  );
}
