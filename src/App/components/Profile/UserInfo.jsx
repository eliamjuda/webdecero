/**
 * Componente UserInfo
 * @param {Object} props - Propiedades del componente
 * @param {string} props.name - Nombre completo del usuario
 * @param {string} props.email - Correo electrónico del usuario
 * @param {string} props.location - Ubicación del usuario (ciudad - país)
 * @returns {JSX.Element} Elemento JSX con la información básica del usuario
 */
const UserInfo = ({ name, email, location }) => {
  const LocationIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={16} 
      height={16} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );

  return (
    <div className="text-center mt-16 mb-6 ">
      {/* Nombre del usuario */}
      <h2 className="text-xl font-bold text-[#EA4D88] mb-1">
        {name}
      </h2>
      
      {/* Correo del usuario */}
      <p className="text-gray-600 text-sm mb-2">
        {email}
      </p>
      
      {/* Ubicación */}
      <div className="flex items-center justify-center text-gray-500 text-sm">
        <LocationIcon />
        <span className="ml-1">{location}</span>
      </div>
    </div>
  );
};

export default UserInfo;