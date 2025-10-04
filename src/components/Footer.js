

const Footer = () => {
  return (
    <footer id="contact">
      <div className="container">
        <div className="footer-content">
          
          <div className="footer-section">
            <h3>Manufa:</h3>
            <p>Samar da bayanai dasuka shafi lafiya, likitanci da kuma asibiti a yaren Hausa.</p>
          </div>
          
          <div className="footer-section">
            <h3>Hanyoyin Tuntuɓa</h3>
            <p>📧 ahmadmusa1114@gmail.com</p>
            <p>📍 Kano, Najeriya</p>
          </div>
          
          <div className="footer-section">
            <h3>Hanyoyin Zamantakewa</h3>
            {/* Using a fragment (<>) or <div> to wrap the list of links */}
            <div>
              <p><a href="https://www.linkedin.com/in/ahmad-m-musa-b93587156/">Linkedin</a></p>
            </div>
          </div>
          
        </div>
        <p>&copy; 2025 Likita-ba-boka-ba.</p>
      </div>
    </footer>
  );
};

export default Footer;