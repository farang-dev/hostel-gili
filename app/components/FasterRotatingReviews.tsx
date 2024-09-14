import React from 'react';
import '../styles/FasterRotatingReviews.css';

const reviews = [
  { text: "I had a fantastic stay here! The staff was incredibly friendly and welcoming, making me feel right at home from the moment I arrived. The entire place is spotlessly clean, and my room was no exception. With only two beds in the room, it offered a nice touch of privacy that you don’t often find in hostels. The bed itself was very comfortable, ensuring a good night’s sleep. I would definitely love to come back again!", author: "Masafumi", country: "United States 🇺🇸" },
  { text: "Located in somewhat centre yet not noisy. Staffs were excellent, especially one of the them Dul helped me with all the information I needed on the island and even for Lombok. I kept extending my stay here because of him.", author: "Mitsuki", country: "United States 🇺🇸" },
  { text: "Nice spacious room with very good aircon. Not many rooms so is usually quite, means I had the pool to myself when I used it! The staff were lovely and very helpful.", author: "Sophie", country: "United Kingdom 🇬🇧" },
  { text: "Love this place. Rooms are great, people are fab and the place is spotless. The staff go out of their way to help guests and create a welcoming environment - Dul is a star! Would stay again in a heartbeat.", author: "Clair", country: "Ireland 🇮🇪" },
  { text: "What a fun place to stay! Great vibe, clean rooms and excellent staff!! Would definitely come back here.", author: "Tiana", country: "Australia 🇦🇺" },
  { text: "The rooms are very clean and for two people which is very important. And the staff is very sweet and smiling, I will miss them, I stayed there for 4 days. And it was nice.", author: "Dilek", country: "Turkey 🇹🇷" }
];

const FasterRotatingReviews: React.FC = () => {
  return (
    <div className="reviews-wrapper">
      <div className="reviews-container">
        {[...reviews, ...reviews].map((review, index) => ( // Duplicate the reviews array
          <div key={index} className="testimonial-item">
            <p>{review.text}</p>
            <p><strong>{review.author} ({review.country})</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FasterRotatingReviews;
