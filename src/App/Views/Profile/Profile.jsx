import { useNavigate } from 'react-router-dom';
import { useSimpleAuth } from '../../hooks/useSimpleAuth';
import ProfileCard from '../../components/Profile/ProfileCard';

const Profile = () => {
  const { user, logout } = useSimpleAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
      logout();
      navigate('/login', { replace: true });
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-[--principal-color] flex items-center justify-center">
        <div className="text-white">Cargando perfil...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[--principal-color] w-full flex items-center justify-center">
      <div className="w-[30%]">
        <ProfileCard 
          user={user}
          onLogout={handleLogout}
        />
      </div>
    </div>
  );
};

export default Profile;