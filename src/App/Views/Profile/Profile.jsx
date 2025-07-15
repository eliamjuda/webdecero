import ProfileCard from '../../components/Profile/ProfileCard';

const Profile = () => {
  // datos falsos
  const mockUser = {
    name: "Nombre completo usuario",
    email: "Correo de usuario",
    location: "Ciudad - País",
    birthDate: "1996-5-30",
    age: 28,
    phone: "(55)9999-9999",
    details: [
      "Información personal 1: usuario",
      "Información personal 2: usuario", 
      "Información personal 3: usuario"
    ]
  };

  const handleLogout = () => {
      alert('Sesión cerrada');
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="w-[30%]">
        <ProfileCard 
          user={mockUser}
          onLogout={handleLogout}
        />
      </div>
    </div>
  );
};

export default Profile;