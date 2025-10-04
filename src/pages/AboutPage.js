import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">Game da Likita Ba Boka Ba</h1>
      <p className="about-subtitle">🏥 Tataccen Ilimin Lafiya daga Likita </p>

      <hr className="about-divider" />

      <p className="about-paragraph">
        <strong>Likita Ba Boka Ba</strong> dandali ne da ke nufin yada ilimin
        kiwon lafiya a harshen Hausa cikin hanya mai sauƙi da fahimta.
        Muna son tabbatar da cewa kowa yana da damar samun sahihin bayani
        kan lafiyar jiki da kwakwalwa.
      </p>

      <h2 className="about-subheading">Manufarmu</h2>
      <p className="about-paragraph">
        Manufarmu ita ce rage gibin fahimta tsakanin likitoci da al’umma, ta
        hanyar samar da bayanai daga masana cikin kalmomi masu sauƙi da hujjoji
        na kimiyya.
      </p>

      <h2 className="about-subheading">Ayyukanmu</h2>
      <ul className="about-list">
        <li className="about-list-item">Bayani kan cututtuka da rigakafi</li>
        <li className="about-list-item">Taimakawa wajen ilmantarwa da wayar da kai</li>
        <li className="about-list-item">Inganta fahimtar lafiyar jiki da kwakwalwa</li>
      </ul>
    </div>
  );
};

export default AboutPage;
