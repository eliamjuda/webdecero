import { useState } from 'react';

/**
 * Componente PasswordInput con toggle de visibilidad
 * @param {Object} props - Propiedades del componente
 * @param {string} props.name - Nombre del input
 * @param {string} props.placeholder - Placeholder del input
 * @param {string} props.value - Valor del input
 * @param {function} props.onChange - Función para manejar cambios
 * @param {boolean} props.required - Si el campo es requerido
 * @param {string} props.className - Clases adicionales
 * @returns {JSX.Element} Elemento JSX del password input
 */
const PasswordInput = ({
  name,
  placeholder,
  value,
  onChange,
  required = false,
  className = '',
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const KeyIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={24} 
      height={24} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className="icon icon-tabler icons-tabler-filled icon-tabler-key"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M14.52 2c1.029 0 2.015 .409 2.742 1.136l3.602 3.602a3.877 3.877 0 0 1 0 5.483l-2.643 2.643a3.88 3.88 0 0 1 -4.941 .452l-.105 -.078l-5.882 5.883a3 3 0 0 1 -1.68 .843l-.22 .027l-.221 .009h-1.172c-1.014 0 -1.867 -.759 -1.991 -1.823l-.009 -.177v-1.172c0 -.704 .248 -1.386 .73 -1.96l.149 -.161l.414 -.414a1 1 0 0 1 .707 -.293h1v-1a1 1 0 0 1 .883 -.993l.117 -.007h1v-1a1 1 0 0 1 .206 -.608l.087 -.1l1.468 -1.469l-.076 -.103a3.9 3.9 0 0 1 -.678 -1.963l-.007 -.236c0 -1.029 .409 -2.015 1.136 -2.742l2.643 -2.643a3.88 3.88 0 0 1 2.741 -1.136m.495 5h-.02a2 2 0 1 0 0 4h.02a2 2 0 1 0 0 -4" />
    </svg>
  );

  const EyeIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={20} 
      height={20} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  );

  const EyeOffIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={20} 
      height={20} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/>
      <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 11 8 11 8a13.16 13.16 0 0 1-1.67 2.68"/>
      <path d="M6.61 6.61A13.526 13.526 0 0 0 1 12s4 8 11 8a9.74 9.74 0 0 0 5.39-1.61"/>
      <line x1="2" y1="2" x2="22" y2="22"/>
    </svg>
  );

  return (
    <div className={`relative ${className}`}>
      <div className={`
        absolute top-0 left-0 h-full w-12 
        ${isFocused ? 'bg-[#2A2F35]' : 'bg-[#32363C]'} 
        rounded-l-[4px] flex justify-center items-center text-white
        transition-colors duration-200 ease-in-out
      `}>
        <KeyIcon />
      </div>
      
      <input
        type={showPassword ? 'text' : 'password'}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required={required}
        className={`
          w-full pl-16 pr-12 py-4 
          ${isFocused ? 'bg-[#3A4047]' : 'bg-[#363B41]'} 
          text-white placeholder-gray-400 rounded-[5px] 
          focus:outline-none focus:ring-0 outline-none
          border-none transition-all duration-200 ease-in-out
          hover:bg-[#3A4047]
        `}
        {...props}
      />
      
      {/* Toggle password visibility button */}
      <button
        type="button"
        onMouseDown={(e) => e.preventDefault()}
        onClick={togglePasswordVisibility}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-400 transition-colors duration-200"
        tabIndex={-1}
      >
        {showPassword ? <EyeOffIcon /> : <EyeIcon />}
      </button>
    </div>
  );
};

export default PasswordInput;