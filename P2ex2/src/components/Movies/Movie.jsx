import React from "react";

class Movie extends React.Component {
  render() {
    const { year, image, title, synopsis } = this.props;

    return (
      /* Usem <article> perquè cada pel·lícula és un contingut independent i complet */
      <article className="relative flex flex-col items-center flex-shrink-0 w-72 mx-6">
        
        {/* Any - Millorat com a encapçalament per a estructura SEO */}
        <header className="flex flex-col items-center">
          <span className="text-3xl font-bold text-white mb-2" aria-label={`Año ${year}`}>
            {year}
          </span>
          <div className="w-1 bg-gray-400 h-6 mb-2" aria-hidden="true"></div>
        </header>

{/* Imatge + títol */}
<div className="bg-gray-800/80 shadow-lg p-4 flex mb-2 w-full max-h-[137px] h-[137px] rounded-t-lg items-center">
  <img
    alt={`Póster de la película ${title}`}
    className="w-[100px] h-[100px] object-cover rounded-lg flex-shrink-0"
    src={image}
  />
  <div className="ml-4 flex flex-col justify-center flex-1 min-w-0">
    <h3 
      className="text-[#ff8c00] leading-none uppercase tracking-tight text-sm sm:text-base"
      style={{ 
        fontFamily: "'Roboto', sans-serif", 
        fontWeight: '800', 
        textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
        wordBreak: "break-word" // Evita que el títol surti de la caixa si és molt llarg
      }}
    >
      {title}
    </h3>
  </div>
</div>

        {/* Línia de connexió amb cercle decoratiu */}
        <div className="relative w-1 bg-gray-400 h-6 flex items-center justify-center" aria-hidden="true">
          <span className="block w-4 h-4 border-2 border-orange-500 rounded-full bg-black absolute -translate-y-1/2 top-5"></span>
        </div>

        {/* Espaiador vertical */}
        <div className="w-1 bg-gray-400 h-6 mb-4" aria-hidden="true"></div>

        {/* Sinopsis - Millorem contrast i alineació */}
        <div className="bg-gray-900/90 shadow-lg p-4 w-full h-[150px] overflow-hidden rounded-b-lg border-t border-gray-700">
          <p className="text-gray-100 text-sm break-words overflow-y-auto h-full text-left leading-relaxed">
            {synopsis}
          </p>
        </div>
      </article>
    );
  }
}

export default Movie;