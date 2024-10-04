import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <h1>Virtual Book Library</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/my-library">My Library</Link>
    </nav>
  </header>
);

export default Header;
