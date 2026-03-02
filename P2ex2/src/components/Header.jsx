import React from "react";
import { NavLink } from "react-router-dom";
import "../Header.scss";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
    this.state = {
      activo: false,
    };
  }

  manejarClick = () => {
    this.setState(
      (prev) => ({ activo: !prev.activo }),
      () => {
        if (this.state.activo) {
          this.audioRef.current.play();
        } else {
          this.audioRef.current.pause();
        }
      },
    );
  };

  render() {
    const { activo } = this.state;

    return (
      <header className="main-header">
        {/* Títol ocult per a l'accessibilitat */}
        <h1 className="sr-only">RESIDENT EVIL PORTAL</h1>

        {/* Bloc d'enllaços */}
        <nav className="nav-menu">
          <NavLink to="/">INICIO</NavLink>
          <NavLink to="/videojuegos">VIDEOJUEGOS</NavLink>
          <NavLink to="/lectura">LIBROS</NavLink>
          <NavLink to="/filmografia">PELICULAS</NavLink>
          <NavLink to="/proxim">PRÓXIMAMENTE</NavLink>
        </nav>

        {/* Bloc de l'àudio i botó */}
        <div className="audio-container">
          <audio
            ref={this.audioRef}
            src="./src/assets/audio/sonido.mp3"
            preload="auto"
          >
            Tu navegador no soporta la reproducción de audio.
          </audio>

          <button
            onClick={this.manejarClick}
            aria-label={
              activo ? "Pausar música ambiental" : "Reproducir música ambiental"
            }
            /* Usamos una clase dinámica de CSS puro, el estilo lo maneja Sass */
            className={`audio-toggle ${activo ? "is-active" : ""}`}
          >
            <img
              src="./src/assets/icon/audio.png"
              width={20}
              alt="Icono de audio"
            />
          </button>
        </div>
      </header>
    );
  }
}

export default Header;
