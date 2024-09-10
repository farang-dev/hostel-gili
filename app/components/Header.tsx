'use client'

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <header className="site-header">
      <div className="header-content">
        <Link href="/" className="logo">H.G.T</Link>
        <nav className="main-nav">
          <ul className={`nav-list ${isNavActive ? 'active' : ''}`}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="#rooms">Rooms</Link></li>
            <li><Link href="#amenities">Amenities</Link></li>
            <li><Link href="#location">Location</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </nav>
        <Link href="#book" className="cta-button">BOOK NOW</Link>
        <button className="hamburger" onClick={toggleNav} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
