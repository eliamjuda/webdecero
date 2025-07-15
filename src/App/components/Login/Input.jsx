import React, { useState, forwardRef } from "react";

/**
 * Componente Input
 * @param {Object} props - Propiedades del componente
 * @param {string} props.type - Tipo de input
 * @param {string} props.placeholder - Placeholder del input
 * @param {boolean} props.isValid - Booleano de si es válido para estilos de error
 * @param {React.Component} props.icon - Icono a mostrar
 * @param {string} props.className - Clases adicionales
 * @returns {JSX.Element} Elemento JSX del input
 */
const Input = forwardRef(({
  type = "text",
  placeholder,
  isValid,
  icon,
  className = "",
  ...props
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <div
        className={`
        absolute top-0 left-0 h-full w-12 
        ${isFocused ? "bg-[#2A2F35]" : "bg-[#32363C]"} 
        rounded-l-[4px] flex justify-center items-center text-white
        transition-colors duration-200 ease-in-out
        ${isValid ? "bg-[#363B41]" : "bg-red-900"}  

      `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="currentColor"
          className="icon icon-tabler icons-tabler-filled icon-tabler-user"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
          <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" />
        </svg>
      </div>

      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`
          w-full pl-16 pr-4 py-4
          ${isFocused ? "bg-[#3A4047]" : "bg-[#363B41]"}
          text-white placeholder-gray-400 rounded-[5px] 
          focus:outline-none focus:ring-0 outline-none
          border-none transition-all duration-200 ease-in-out
          hover:bg-[#3A4047]
          border-1 border-red-100
        `}
        {...props}
      />
    </div>
  );
});

Input.displayName = 'Input';

export default Input;