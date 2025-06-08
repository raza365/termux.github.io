// rkbookhouse React App with Firebase Demo Setup

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

const Home = () => (
  <div className="text-center py-10">
    <h1 className="text-3xl font-bold">Welcome to rkbookhouse</h1>
    <p className="mt-2">Your favorite online bookstore.</p>
  </div>
);

const Shop = () => {
  const products = [
    {
      id: 1,
      title: "JavaScript Basics",
      price: "$20",
      description: "Learn the fundamentals of JS",
    },
    {
      id: 2,
      title: "React Guide",
      price: "$25",
      description: "Master React step by step",
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Shop</h2>
      <div className="grid gap-4">
        {products.map((p) => (
          <div key={p.id} className="border p-4 rounded shadow">
            <h3 className="font-bold text-lg">{p.title}</h3>
            <p>{p.description}</p>
            <p className="text-green-600">{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in as ${email}`);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-sm mx-auto">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
    </form>
  );
};

const Dashboard = () => (
  <div className="p-4">
    <h2 className="text-xl font-semibold mb-4">Admin Dashboard (Demo)</h2>
    <p>Product management interface coming soon.</p>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-gray-800 text-white p-4 text-center text-2xl font-bold">
          rkbookhouse
        </header>
        <nav className="bg-gray-700 text-white flex justify-center gap-4 p-2">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/login">Login</Link>
          <Link to="/admin">Dashboard</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Dashboard />} />
        </Routes>

        <footer className="bg-gray-800 text-white text-center py-4 mt-8">
          © 2025 rkbookhouse
        </footer>
      </div>
    </Router>
  );
};

export default App;
