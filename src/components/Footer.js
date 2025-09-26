import React from 'react';

const Footer = () => {
  return (
    <footer id="contact">
      <div className="container">
        <div className="footer-content">
          
          <div className="footer-section">
            <h3>Game da Lafiya</h3>
            <p>Muna ba da ilimin kiwon lafiya da Hausa don taimakawa al'umma su sami ilimi mai amfani game da lafiya.</p>
          </div>
          
          <div className="footer-section">
            <h3>Hanyoyin Tuntuɓa</h3>
            <p>📧 info@lafiya.com</p>
            <p>📱 +234 123 456 789</p>
            <p>📍 Kano, Najeriya</p>
          </div>
          
          <div className="footer-section">
            <h3>Hanyoyin Zamantakewa</h3>
            {/* Using a fragment (<>) or <div> to wrap the list of links */}
            <div>
              <p><a href="#">Facebook</a></p>
              <p><a href="#">Twitter</a></p>
              <p><a href="#">WhatsApp</a></p>
            </div>
          </div>
          
        </div>
        <p>&copy; 2024 Lafiya. Dukkan hakkokin an kiyaye su.</p>
      </div>
    </footer>
  );
};

export default Footer;