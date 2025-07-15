// App/components/ui/Avatar.jsx
import React from 'react';

/**
 * Componente Avatar circular para mostrar logo o imagen de perfil
 * @param {Object} props - Propiedades del componente
 * @param {string} props.src - URL de la imagen (opcional)
 * @param {string} props.alt - Texto alternativo
 * @param {React.Component} props.children - Contenido del avatar (logo, iniciales, etc.)
 * @param {string} props.size - Tamaño del avatar (sm, md, lg, xl)
 * @param {string} props.className - Clases CSS adicionales
 * @returns {JSX.Element} Elemento JSX del avatar
 */
const Avatar = ({ 
  src, 
  alt = "Avatar", 
  className = '' 
}) => {

    const webDeCeroImage = "/webdecerologo.png";

  return (
    <div className={`
      rounded-full 
      bg-[--secondary-color] 
      border-4 border-[--secondary-color] 
      flex items-center justify-center 
      overflow-hidden shadow-lg 
      w-[150px]
      ${className}
    `}>
      <img 
        src={src || webDeCeroImage}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Avatar;