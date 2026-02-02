import React from "react";

class Book extends React.Component {
  render() {
    const { image, title, synopsis } = this.props;

    return (
      <article className="bg-gray-800/80 shadow-lg p-4 rounded-lg h-full flex flex-col border border-gray-700">
        {/* Imagen + título */}
        <div className="flex items-center mb-4">
          <img
            alt={`Portada del libro ${title}`}
            className="w-[80px] h-[120px] object-cover rounded-lg flex-shrink-0 shadow-md"
            src={image}
          />
          <div className="ml-4 flex-1 min-w-0">
            <h3 
              className="text-[#ff8c00] leading-none uppercase tracking-tight text-sm sm:text-base"
              style={{ 
                fontFamily: "'Roboto', sans-serif", 
                fontWeight: '800', 
                textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                wordBreak: "break-word"
              }}
            >
              {title}
            </h3>
          </div>
        </div>

        {/* Sinopsis - Millorem contrast i llegibilitat */}
        <p className="text-gray-100 text-sm text-left break-words leading-relaxed">
          {synopsis}
        </p>
      </article>
    );
  }
}

export default Book;