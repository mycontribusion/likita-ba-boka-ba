

const Footer = () => {
  return (
    <footer id="contact">
      <div className="container">
        <div className="footer-content">
          
          <div className="footer-section">
            <h3>Game da mu</h3>
            <p>Muna ba da ilimin kiwon lafiya da Hausa don taimakawa al'umma su sami ilimi mai amfani game da lafiya.</p>
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
              <p><a href="#">Twitter</a></p>
            </div>
          </div>
          
        </div>
        <p>&copy; 2024 Likita-ba-boka-ba.</p>
      </div>
    </footer>
  );
};

export default Footer;