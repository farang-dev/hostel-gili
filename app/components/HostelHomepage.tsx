'use client'

import React from 'react';
import '../styles/HostelHomepage.css';
import Image from "next/image"
import { Bed, Printer, Tv, Wind, Bath, Wifi, Waves, Coffee } from "lucide-react"

const HostelHomepage: React.FC = () => {
  const bookingUrl = "https://www.booking.com/hotel/id/hostel-gili-trawangan.en-gb.html#tab-main";

  return (
    <div className="hostel-homepage">
      <header className="site-header">
        {/* Header content remains the same */}
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Welcome to Hostel Gili Trawangan</h1>
            <p>Your perfect blend of comfort, adventure, and relaxation on the beautiful Gili Trawangan island.</p>
          </div>
          <div className="hero-image-grid">
            <Image src="/img/hostel1.jpg" alt="Hostel exterior" width={300} height={200} />
            <Image src="/img/hostel2.jpg" alt="Hostel room" width={300} height={200} />
            <Image src="/img/hostel3.jpg" alt="Hostel common area" width={300} height={200} />
            <Image src="/img/hostel4.jpg" alt="Hostel beach view" width={300} height={200} />
          </div>
          <a href={bookingUrl} className="cta-button" target="_blank" rel="noopener noreferrer">BOOK NOW</a>
        </section>

        <section className="about">
          <h2>About Us</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Hostel Gili Trawangan offers a perfect blend of comfort, adventure, and relaxation. Located just 100 meters from North East Beach, our hostel provides an ideal base for exploring the beautiful Gili Trawangan island.
              </p>
            </div>
            <div className="about-image">
              <Image src="/path-to-your-image.jpg" alt="Hostel interior" width={500} height={300} />
            </div>
          </div>
        </section>

        <section className="amenities">
          <h2>Our Facilities</h2>
          <div className="amenities-grid">
            {[
              { icon: <Bed />, name: 'Double Story Beds', description: 'Comfortable double story beds for a good night\'s sleep.' },
              { icon: <Printer />, name: 'Storage', description: 'Secure storage facilities for your belongings.' },
              { icon: <Tv />, name: 'Television', description: 'Entertainment area with large screen TV.' },
              { icon: <Wind />, name: 'Air Conditioning', description: 'Climate controlled rooms for your comfort.' },
              { icon: <Bath />, name: 'Bathroom', description: 'Clean and modern bathroom facilities.' },
              { icon: <Wifi />, name: 'WiFi', description: 'Free high-speed WiFi throughout the hostel.' },
              { icon: <Waves />, name: 'Swimming Pool', description: 'Refreshing swimming pool for guests.' },
              { icon: <Coffee />, name: 'Coffee Bar', description: 'Enjoy fresh coffee and snacks at our in-house coffee bar.' }
            ].map((amenity, index) => (
              <div key={index} className="amenity-item">
                {amenity.icon}
                <h3>{amenity.name}</h3>
                <p>{amenity.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="testimonials">
          <h2>What our visitors are saying!</h2>
          <div className="testimonials-grid">
            {[
              { name: 'Angela Charlton', text: '"Vivamus id gravida mi, nec ullamcorper purus. Suspendisse et nibh sagittis, faucibus erat at, ultrices ipsum. Praesent ac lobortis mauris, non sagittis quam."' },
              { name: 'Kason Espinosa', text: '"Ac feugiat ante. Donec ultricies lobortis eros, nec eleifend est semper ultricies. Vivamus consequat augue viverra eget dolor vel finibus. Cras in bibendum odio urna at amet."' },
              { name: 'Jeff Guerra', text: '"Aliquet erat. Nulla tempor mattis erat placerat. Sed id felis lacus. Nunc tristique tortor vitae est placerat ut venenatis tellus."' }
            ].map((testimonial, index) => (
              <div key={index} className="testimonial-item">
                <p>{testimonial.text}</p>
                <p className="testimonial-author">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="gallery">
          <h2>Gallery</h2>
          <div className="gallery-grid">
            <Image src="/img/gallery1.jpg" alt="Gallery Image 1" width={300} height={200} />
            <Image src="/img/gallery2.jpg" alt="Gallery Image 2" width={300} height={200} />
            <Image src="/img/gallery3.jpg" alt="Gallery Image 3" width={300} height={200} />
          </div>
        </section>

        <section className="location">
          <h2>Our Location</h2>
          <div className="location-content">
            <div className="location-text">
              <p>Jalan Ikan Hiu, 83352 Gili Trawangan, Indonesia</p>
            </div>
            <div className="location-map">
              <div id="map" style={{ height: '300px', width: '100%' }}></div>
            </div>
          </div>
        </section>

        <section className="cta">
          <h2>Ready for your adventure?</h2>
          <a href={bookingUrl} className="cta-button" target="_blank" rel="noopener noreferrer">BOOK NOW</a>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2023 Hostel Gili Trawangan. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HostelHomepage;
