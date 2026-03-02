import React from "react";
import "../Footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <footer className="main-footer-bottom">
        {/* Bloque 1: Enlaces */}
        <div className="footer-grid">
          <a href="https://game.capcom.com/residentevil/es/renet.html">
            <img src="/img/footer/footer1.png" alt="Resident Evil Portal" />
          </a>
          <a href="https://www.residentevil.com/re4/es/">
            <img src="/img/footer/footer2.png" alt="Resident Evil 4 Remake" />
          </a>
          <a href="https://www.residentevil.com/village/es/">
            <img src="/img/footer/footer3.png" alt="Resident Evil Village" />
          </a>
          <a href="https://game.capcom.com/residentevil/en/about-portal.html">
            <img src="/img/footer/footer4.png" alt="About Resident Evil Portal" />
          </a>
        </div>

        {/* Bloque 2: Plataformas */}
        <div className="footer-platforms">
          <img
            src="/img/footer/plataformas.png"
            alt="Disponible en PlayStation, Xbox, Steam y Nintendo Switch"
          />
        </div>

        {/* Bloque 3: Redes */}
        <div className="footer-social">
          <img
            src="/img/footer/redes-sociales.png"
            alt="Síguenos en redes sociales"
          />
        </div>
      </footer>
    );
  }
}

export default Footer;