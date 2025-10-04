import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">Game da <em>Likita Ba Boka Ba</em></h1>
      <p className="about-subtitle">🏥 Tataccen Ilimin Lafiya daga Likita </p>

      <hr className="about-divider" />

      <p className="about-paragraph">
        <strong>Likita Ba Boka Ba</strong> Kafa ce da keda nufin yada bayanai da suka shafi
        kiwon lafiya cikin harshen Hausa. Bayanai dasuke tabbatattu waenda akan fatan zasu amfanar. 
        Insha Allah
      </p>

      <h2 className="about-subheading">Mai Shafin:</h2>
      <p className="about-paragraph">
        Ni sunana Dr Ahmad Musa, nayi karatun zama likita, wato MBBS 
        a jami'ar Bayero ta Kano.
        A halin yanzu ina aiki ne a Jihar Yobe.
      </p>

      <h2 className="about-subheading">Manufar</h2>
      <p className="about-paragraph">
        Manufar itace tabbatar wa al'umma cewa lallai, likitoci da ilimi suke aiki,
        ba da son rai ba.
      </p>

      <h2 className="about-subheading">Ayyukan</h2>
      <ul className="about-list">
        <li className="about-list-item">Bayani kan jikin dan Adam</li>
        <li className="about-list-item">Bayani kan cututtuka</li>
        <li className="about-list-item">Bayani kan asibiti</li>
      </ul>
    </div>
  );
};

export default AboutPage;
