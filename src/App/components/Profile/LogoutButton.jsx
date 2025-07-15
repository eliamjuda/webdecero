/**
 * Componente LogoutButton
 * @param {Object} props - Propiedades del componente
 * @param {function} props.onClick - Función que se ejecuta al hacer click
 * @param {string} props.className - Clases CSS adicionales
 * @returns {JSX.Element} Elemento JSX del botón de logout
 */
const LogoutButton = ({ onClick, className = '' }) => {
  const LogoutIcon = () => (
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
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
      <polyline points="16,17 21,12 16,7"/>
      <line x1="21" y1="12" x2="9" y2="12"/>
    </svg>
  );

  return (
    <button
      onClick={onClick}
      className={`
        absolute top-4 right-4
        p-2 
        text-gray-400 hover:text-red-500 
        hover:bg-red-50 
        rounded-full 
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2
        ${className}
      `}
      title="Cerrar sesión"
    >
      <LogoutIcon />
    </button>
  );
};

export default LogoutButton;