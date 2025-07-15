import Avatar from "./Avatar";
import InfoCard from "./InfoCard";
import LogoutButton from "./LogoutButton";
import UserDetails from "./UserDetails";
import UserInfo from "./UserInfo";
import UserPersonalInfo from "./UserPersonalInfo";

/**
 * Componente ProfileCard
 * @param {Object} props - Propiedades del componente
 * @param {Object} props.user - Datos del usuario
 * @param {function} props.onLogout - Función para cerrar sesión
 * @returns {JSX.Element} Elemento JSX de la tarjeta de perfil completa
 */
const ProfileCard = ({ user, onLogout }) => {

  return (
    <div className="relative">
      <InfoCard className="min-h-[400px]">
        <Avatar className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        <LogoutButton onClick={onLogout} />

        <UserInfo 
          name={user.name}
          email={user.email}
          location={user.location}
          className="mt-15"
        />

        <UserPersonalInfo 
          birthDate={user.birthDate}
          age={user.age}
          phone={user.phone}
        />

        <UserDetails details={user.details} />
      </InfoCard>
    </div>
  );
};

export default ProfileCard;