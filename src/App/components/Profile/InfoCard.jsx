import React from 'react';

/**
 * Componente InfoCard
 * @param {Object} props - Propiedades del componente
 * @param {React.Component} props.children - Contenido de la tarjeta
 * @param {string} props.className - Clases CSS adicionales
 * @returns {JSX.Element} Elemento JSX de la tarjeta de información
 */
const InfoCard = ({ children, className = '' }) => {
  return (
    <div className={`
      bg-white 
      rounded-2xl 
      shadow-xl 
      p-10 
      w-full 
      h-full
      mx-auto
      relative
      ${className}
    `}>
      {children}
    </div>
  );
};

export default InfoCard;