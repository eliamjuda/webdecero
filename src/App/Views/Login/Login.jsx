import { useState } from 'react';
import LoginForm from '../../components/Login/form/LoginForm';

const Login = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (formData) => {
    setLoading(true);
    setError('');

    try {
      // delay falso
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (formData.username === 'admin' && formData.password === '123456') {
        alert('correcto');
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
    <div className="min-h-screen bg-[#1F2226] w-full flex items-center justify-center p-4">
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