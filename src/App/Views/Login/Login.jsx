import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/Login/form/LoginForm';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Redireccionar si ya está autenticado
  useEffect(() => {
    if (isAuthenticated) {
      console.log("ya está autenticado, le redirigimos a profile")
      navigate('/profile', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = async (formData) => {
    setLoading(true);
    setError('');

    try {
      // delay falso
      await new Promise(resolve => setTimeout(resolve, 1000));

      const success = await login(formData);

      if (success) {
        // redirección
      navigate('/profile', { replace: true });
        console.log('Login exitoso - redirigiendo...');
      } else {
        setError('Credenciales incorrectas.');
      }
    } catch (err) {
      setError('Error al intentar iniciar sesión');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[--principal-color] w-full flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <LoginForm 
          onSubmit={handleLogin}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  );
};

export default Login;