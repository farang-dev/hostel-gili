'use client'

import React, { useState } from 'react';
import '../styles/HostelHomepage.css';
import Image from "next/image"
import FasterRotatingReviews from './FasterRotatingReviews'; // Import the FasterRotatingReviews component

const images = [
  { url: '/media/hostel1.jpg', alt: 'Hostel Image 1' }, // Removed height
  { url: '/media/hostel2.jpg', alt: 'Hostel Image 2' }, // Removed height
  { url: '/media/hostel3.jpg', alt: 'Hostel Image 3' }, // Removed height
  { url: '/media/hostel4.jpg', alt: 'Hostel Image 4' }, // Removed height
  // Add more images as needed
];

const HostelHomepage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const bookingUrl = "https://www.booking.com/hotel/id/hostel-gili-trawangan.en-gb.html#tab-main";

  return (
    <div className="hostel-homepage">
      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Welcome to Hostel Gili Trawangan</h1>
            <p>Your perfect blend of comfort, adventure, and relaxation on the beautiful Gili Trawangan island.</p>
          </div>
          <div className="hero-image-grid">
            {images.map((image) => (
              <img
                key={image.url}
                src={image.url}
                alt={image.alt}
                className="hero-image" // Added class for styling
                onClick={() => handleImageClick(image.url)}
              />
            ))}
          </div>
          <a href={bookingUrl} className="cta-button hostel-cta-button" target="_blank" rel="noopener noreferrer">BOOK NOW</a>
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
              { name: 'Double Story Beds', description: 'Comfortable double story beds for a good night\'s sleep.' },
              { name: 'Storage', description: 'Secure storage facilities for your belongings.' },
              { name: 'Television', description: 'Entertainment area with large screen TV.' },
              { name: 'Air Conditioning', description: 'Climate controlled rooms for your comfort.' },
              { name: 'Bathroom', description: 'Clean and modern bathroom facilities.' },
              { name: 'WiFi', description: 'Free high-speed WiFi throughout the hostel.' },
              { name: 'Swimming Pool', description: 'Refreshing swimming pool for guests.' },
              { name: 'Coffee Bar', description: 'Enjoy fresh coffee and snacks at our in-house coffee bar.' }
            ].map((amenity, index) => (
              <div key={index} className="amenity-item">
                <h3>{amenity.name}</h3>
                <p>{amenity.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="testimonials">
          <h2>What our visitors are saying!</h2>
          <FasterRotatingReviews /> {/* Add the FasterRotatingReviews component here */}
        </section>

        <section className="gallery">
          <h2>Gallery</h2>
          <div className="gallery-grid">
            <Image src="/img/gallery1.jpg" alt="Gallery Image 1" width={300} height={400} /> {/* Doubled height */}
            <Image src="/img/gallery2.jpg" alt="Gallery Image 2" width={300} height={400} /> {/* Doubled height */}
            <Image src="/img/gallery3.jpg" alt="Gallery Image 3" width={300} height={400} /> {/* Doubled height */}
          </div>
        </section>

        <section className="location">
          <h2>Our Location</h2>
          <div className="location-content">
            <p className="location-text">Jalan Ikan Hiu, 83352 Gili Trawangan, Indonesia</p>
            <div className="location-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.5421636891644!2d116.03622147489658!3d-8.352499192399016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcde6a3c1e6efb3%3A0x7f9f8f9f9f9f9f9f!2sGili%20Trawangan!5e0!3m2!1sen!2sus!4v1682430291619!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>

        <section className="cta">
          <h2>Ready for your adventure?</h2>
          <a href={bookingUrl} className="cta-button hostel-cta-button" target="_blank" rel="noopener noreferrer">BOOK NOW</a>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2023 Hostel Gili Trawangan. All rights reserved.</p>
      </footer>

      {selectedImage && (
        <div className="modal" onClick={handleClose}>
          <span className="close">&times;</span>
          <img className="modal-content" src={selectedImage} alt="Full Size" />
        </div>
      )}
    </div>
  );
};

export default HostelHomepage;
