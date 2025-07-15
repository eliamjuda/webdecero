/**
 * Componente UserPersonalInfo - Muestra estadísticas del usuario en tres columnas
 * @param {Object} props - Propiedades del componente
 * @param {string} props.birthDate - Fecha de nacimiento
 * @param {number} props.age - Edad del usuario
 * @param {string} props.phone - Número de teléfono
 * @returns {JSX.Element} Componente del Usuario
 */
const UserPersonalInfo = ({ birthDate, age, phone }) => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="text-center">
        <div className="text-lg font-bold text-gray-700">
          {birthDate}
        </div>
        <div className="text-xs text-gray-500 mt-1">
          Cumpleaños
        </div>
      </div>
      
      <div className="text-center">
        <div className="text-lg font-bold text-gray-700">
          {age}
        </div>
        <div className="text-xs text-gray-500 mt-1">
          Edad
        </div>
      </div>
      
      <div className="text-center">
        <div className="text-lg font-bold text-gray-700">
          {phone}
        </div>
        <div className="text-xs text-gray-500 mt-1">
          Teléfono
        </div>
      </div>
    </div>
  );
};

export default UserPersonalInfo;