import React from "react";

class Incoming extends React.Component {
  render() {
    return (
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto py-10">
        
        {/* Projecte 1 */}
        <div className="bg-black/60 p-4 rounded-xl border border-gray-700">
          <video 
            className="w-full rounded-lg" 
            controls 
            aria-label="Tráiler de Resident Evil IX: Réquiem"
          >
            {/* Nota: En producció, la ruta hauria de ser /video/... sense 'public' */}
            <source src="/video/requiem.mp4" type="video/mp4" />
            Tu navegador no soporta el vídeo.
          </video>
          {/* Color corregit per a contrast 4.5:1 */}
          <h3 className="mt-4 text-[#ff8c00] font-bold text-xl">Resident Evil IX: Réquiem</h3>
          <p className="text-gray-200 mt-2">
            La analista del FBI Grace Ashcroft investiga una misteriosa
            enfermedad que causa muertes llevándola al Hotel Wrenwood y de
            vuelta a los orígenes de la tragedia en Raccoon City.
          </p>
        </div>

        {/* Projecte 2 */}
        <div className="bg-black/60 p-4 rounded-xl border border-gray-700">
          <video 
            className="w-full rounded-lg" 
            controls 
            aria-label="Tráiler de Resident Evil: Survival Unit"
          >
            <source src="/video/survivalUnit.mp4" type="video/mp4" />
            Tu navegador no soporta el vídeo.
          </video>
      
          <h3 className="mt-4 text-[#ff8c00] font-bold text-xl">Resident Evil: Survival Unit</h3>
          <p className="text-gray-200 mt-2">
            El juego comienza con el protagonista despertando en un misterioso
            hospital, tras haber sido utilizado como sujeto de pruebas por la
            Corporación Umbrella.
          </p>
        </div>
        
      </section>
    );
  }
}

export default Incoming;