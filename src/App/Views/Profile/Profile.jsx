import { useNavigate } from 'react-router-dom';
import ProfileCard from '../../components/Profile/ProfileCard';
import { useAuth } from '../../context/AuthContext';

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
      logout();
      navigate('/login', { replace: true });
  };

  if (!user) {
    return (
      <div className="min-h-screen w-full bg-[--principal-color] flex items-center justify-center">
        <div className="text-white">Cargando perfil...</div>
      </div>
    );
  }

  const userSummary = {
    fullName: `${user.firstName} ${user.lastName}`,
    email: user.email,
    location: {
      city: user.address.city,
      country: user.address.country,
    },
    birthDate: user.birthDate,
    age: user.age,
    phone: user.phone,
    details: [
      `Gender: ${user.gender}`,
      `Blood Group: ${user.bloodGroup}`,
      `Eye Color: ${user.eyeColor}`,
      `Hair: ${user.hair.color}, ${user.hair.type}`,
      `University: ${user.university}`,
    ],
    image: user.image
  };


  return (
    <div className="min-h-screen bg-[--principal-color] w-full flex items-center justify-center">
      <div className="md:w-[90%] w-[90%] lg:w-[30%] ">
        <ProfileCard 
          user={userSummary}
          onLogout={handleLogout}
        />
      </div>
    </div>
  );
};

export default Profile;