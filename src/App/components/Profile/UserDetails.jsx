/**
 * Componente UserDetails - Muestra información adicional del usuario
 * @param {Object} props - Propiedades del componente
 * @param {Array} props.details - Array de detalles adicionales del usuario
 * @returns {JSX.Element} Elemento JSX con los detalles del usuario
 */
const UserDetails = ({ details = [] }) => {
  return (
    <div className="space-y-2 p-8">
      <ul className="list-disc">
      {details.map((detail, index) => (
        <li key={index}>{detail}</li>
      ))}
      </ul>
    </div>
  );
};

export default UserDetails;