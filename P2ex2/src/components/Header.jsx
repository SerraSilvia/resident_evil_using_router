import React from "react";
import { NavLink } from "react-router-dom";

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
      }
    );
  };

  render() {
    const { activo } = this.state;

    return (
      <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md">
        <h1 className="sr-only">Nom de la teva Web - Inicio</h1>

        <nav className="max-w-10xl flex flex-wrap items-center justify-between px-4 sm:px-6 py-2 text-white">
          {/* Bloc d'enllaços */}
          <div className="flex gap-4">
            <NavLink to="/" className="hover:text-green-400">INICIO</NavLink>
            <NavLink to="/videojuegos" className="hover:text-green-400">VIDEOJUEGOS</NavLink>
            <NavLink to="/lectura" className="hover:text-green-400">LIBROS</NavLink>
            <NavLink to="/filmografia" className="hover:text-green-400">PELICULAS</NavLink>
            <NavLink to="/proxim" className="hover:text-green-400">PRÓXIMAMENTE</NavLink>
          </div>

          {/* Bloc de l'àudio i botó */}
          <div className="flex justify-end items-center gap-2">
            <audio ref={this.audioRef} src="././src/assets/audio/sonido.mp3" preload="auto">
              Tu navegador no soporta la reproducción de audio.
            </audio>
            
            <button
              onClick={this.manejarClick}
              aria-label={activo ? "Pausar música ambiental" : "Reproducir música ambiental"}
              className={`p-1 rounded transition-colors duration-300 ${activo ? "bg-green-600" : "bg-gray-500"}`}
            >
              <img
                src="././src/assets/icon/audio.png"
                width={20}
                alt="" 
              />
            </button>
          </div> {/* Tancament correcte del div del botó */}
        </nav>
      </header>
    );
  }
}

export default Header;