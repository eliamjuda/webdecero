/**
 * Componente Button reutilizable con efectos visuales
 * @param {Object} props - Propiedades del componente
 * @param {string} props.children - Contenido del botón
 * @param {string} props.type - Tipo de botón (button, submit, reset)
 * @param {boolean} props.disabled - Si el botón está deshabilitado
 * @param {boolean} props.loading - Si el botón está en estado de carga
 * @param {function} props.onClick - Función que se ejecuta al hacer click
 * @param {string} props.className - Clases CSS adicionales
 * @returns {JSX.Element} Elemento JSX del botón
 */
const Button = ({
  children,
  type = 'button',
  disabled = false,
  loading = false,
  onClick,
  className = '',
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        w-full bg-[#EA4D88] hover:bg-[#d63d75] active:bg-[#c2356a]
        text-white py-3 px-4 rounded-[4px] font-semibold 
        transition-all duration-200 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-[#EA4D88] focus:ring-offset-2 focus:ring-offset-[#1F2226]
        transform hover:scale-[1.02] active:scale-[0.98]
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-[#EA4D88]
        ${className}
      `}
      {...props}
    >
      {loading ? (
        <div className="flex items-center justify-center">
          <svg 
            className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Cargando...
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;