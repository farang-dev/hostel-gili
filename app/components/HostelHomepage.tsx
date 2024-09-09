'use client'

import React from 'react';
import '../styles/HostelHomepage.css';

const HostelHomepage: React.FC = () => {
  return (
    <div className="hostel-homepage">
      <header>
        <h1>Hostel Gili Trawangan</h1>
      </header>

      <main>
        <section className="hero">
          <h2>Your beachfront paradise on Gili Trawangan Island</h2>
          <button className="book-now">Book Now</button>
        </section>

        <section className="about">
          <h3>About Us</h3>
          <p>
            Hostel Gili Trawangan offers a perfect blend of comfort, adventure, and relaxation. Located just 100 meters from North East Beach, our hostel provides an ideal base for exploring the beautiful Gili Trawangan island.
          </p>
        </section>

        <section className="amenities">
          <h3>Amenities</h3>
          <div className="amenities-grid">
            {['Outdoor swimming pool', 'Private beach area', 'Free WiFi', 'Air-conditioned rooms', 'On-site bar', 'Garden and terrace', '24-hour security'].map((amenity, index) => (
              <div key={index} className="amenity-item">{amenity}</div>
            ))}
          </div>
        </section>

        <section className="accommodation">
          <h3>Accommodation Options</h3>
          <div className="room-types">
            <div className="room-type">
              <h4>Twin Room with Pool View</h4>
              <p>Perfect for friends or couples, featuring two single beds and a refreshing pool view.</p>
            </div>
            <div className="room-type">
              <h4>Dormitory Rooms</h4>
              <p>Choose from female, male, or mixed dormitory rooms for a social and budget-friendly stay.</p>
            </div>
          </div>
        </section>

        <section className="activities">
          <h3>Island Activities</h3>
          <p>Explore the best of Gili Trawangan with our curated activities:</p>
          <ul>
            <li>Snorkeling and diving adventures</li>
            <li>Cycling around the island</li>
            <li>Sunset beach walks</li>
            <li>Cooking classes</li>
            <li>Water sports</li>
          </ul>
        </section>

        <section className="location">
          <h3>Prime Location</h3>
          <p>Situated in an excellent location rated 9.1/10 by our guests, Hostel Gili Trawangan is close to:</p>
          <ul>
            <li>North East Beach (100 meters)</li>
            <li>South East Beach</li>
            <li>Turtle Conservation Gili Trawangan</li>
            <li>Gili Trawangan Harbour</li>
          </ul>
        </section>

        <section className="booking">
          <h3>Book Your Stay</h3>
          <button className="check-availability">Check Availability</button>
        </section>
      </main>

      <footer>
        <p>© 2023 Hostel Gili Trawangan. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HostelHomepage;
