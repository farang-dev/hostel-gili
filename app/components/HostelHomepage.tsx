import React from 'react';
import '../styles/HostelHomepage.css';

const HostelHomepage: React.FC = () => {
  return (
    <div className="hostel-homepage">
      <header>
        {/* Navigation menu */}
      </header>

      <main>
        <section id="hero">
          <h1>Hostel Gili Trawangan</h1>
          <p>Your beachfront paradise on Gili Trawangan Island</p>
          {/* Add a prominent "Book Now" button */}
        </section>

        <section id="about">
          <h2>About Us</h2>
          <p>Hostel Gili Trawangan offers a perfect blend of comfort, adventure, and relaxation. Located just 100 meters from North East Beach, our hostel provides an ideal base for exploring the beautiful Gili Trawangan island.</p>
        </section>

        <section id="amenities">
          <h2>Amenities</h2>
          <ul>
            <li>Outdoor swimming pool with infinity edge and pool bar</li>
            <li>Private beach area</li>
            <li>Free WiFi throughout the property</li>
            <li>Air-conditioned rooms</li>
            <li>On-site bar</li>
            <li>Garden and terrace</li>
            <li>24-hour security</li>
          </ul>
        </section>

        <section id="rooms">
          <h2>Accommodation Options</h2>
          <div className="room-type">
            <h3>Twin Room with Pool View</h3>
            <p>Perfect for friends or couples, featuring two single beds and a refreshing pool view.</p>
          </div>
          <div className="room-type">
            <h3>Dormitory Rooms</h3>
            <p>Choose from female, male, or mixed dormitory rooms for a social and budget-friendly stay.</p>
          </div>
        </section>

        <section id="activities">
          <h2>Island Activities</h2>
          <p>Explore the best of Gili Trawangan with our curated activities:</p>
          <ul>
            <li>Snorkeling and diving adventures</li>
            <li>Cycling around the island</li>
            <li>Sunset beach walks</li>
            <li>Cooking classes</li>
            <li>Water sports</li>
          </ul>
        </section>

        <section id="location">
          <h2>Prime Location</h2>
          <p>Situated in an excellent location rated 9.1/10 by our guests, Hostel Gili Trawangan is close to:</p>
          <ul>
            <li>North East Beach (100 meters)</li>
            <li>South East Beach</li>
            <li>Turtle Conservation Gili Trawangan</li>
            <li>Gili Trawangan Harbour</li>
          </ul>
        </section>

        <section id="reviews">
          <h2>Guest Reviews</h2>
          {/* Add a carousel or grid of guest reviews here */}
        </section>

        <section id="booking">
          <h2>Book Your Stay</h2>
          {/* Add a booking form or widget here */}
        </section>
      </main>

      <footer>
        {/* Add contact information, social media links, and other relevant details */}
      </footer>
    </div>
  );
};

export default HostelHomepage;
