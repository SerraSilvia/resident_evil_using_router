import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import portada from "./assets/portada.png";

// 1. IMPORTANTE:archivo global de Sass 
import "./global.scss"; 

// Importación de componentes
import Header from "./components/Header.jsx";
import Background from "./components/Background.jsx";
import Snowstorm from "./components/Snowstorm.jsx";
import Footer from "./components/Footer.jsx";
import VideoGame from "./components/Videogames/Videogame.jsx";
import Book from "./components/Reading/Book.jsx";
import Movie from "./components/Movies/Movie.jsx";
import Incoming from "./components/Incoming/Incoming.jsx";

// Importación de datos
import gamesData from "./data/games.json";
import booksData from "./data/books.json";
import moviesData from "./data/movies.json";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* Usamos una clase base de layout */}
        <div className="app-container"> 
          <Background />
          <Snowstorm />
          
          <Header />

          {/* Cambiamos pt-20 por una clase que podemos controlar en Sass */}
          <main className="main-content"> 
            <Routes>
              
              {/* RUTA HOME */}
              <Route path="/" element={
                <section className="home-hero">
                  <img src={portada} alt="Portada Resident Evil" className="hero-img" />
                </section>
              } />

              {/* RUTA VIDEOJUEGOS */}
              <Route path="/videojuegos" element={
                <section className="section"> {/* Clase .section de tu Sass */}
                  <h1>VIDEOJUEGOS</h1>
                  <div className="horizontal-scroll">
                    {gamesData.games.map((game, index) => (
                      <VideoGame key={index} {...game} />
                    ))}
                  </div>
                </section>
              } />

              {/* RUTA LECTURA */}
              <Route path="/lectura" element={
                <section className="section">
                  <h1>LIBROS</h1>
                  <div className="grid-container">
                    {booksData.books.map((book, index) => (
                      <Book key={index} {...book} />
                    ))}
                  </div>
                </section>
              } />

              {/* RUTA FILMOGRAFIA */}
              <Route path="/filmografia" element={
                <section className="section">
                  <h1>PELÍCULAS</h1>
                  <div className="horizontal-scroll">
                    {moviesData.movies.map((movie, index) => (
                      <Movie key={index} {...movie} />
                    ))}
                  </div>
                </section>
              } />

              {/* RUTA PRÓXIMAMENTE */}
              <Route path="/proxim" element={
                <section className="section">
                  <h1>PRÓXIMAMENTE</h1>
                  <Incoming />
                </section>
              } />

              <Route path="*" element={ <h1 className="error-404">404 - Página no encontrada</h1> } />

            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;