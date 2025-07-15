import { useState } from 'react';
import Input from '../Input';
import PasswordInput from '../PasswordInput';
import Button from '../Button';

/**
 * Componente LoginForm que maneja toda la lógica del formulario de login
 * @param {Object} props - Propiedades del componente
 * @param {function} props.onSubmit - Función que se ejecuta al enviar el formulario
 * @param {boolean} props.loading - Si el formulario está en estado de carga
 * @param {string} props.error - Mensaje de error a mostrar
 * @returns {JSX.Element} Elemento JSX del formulario de login
 */
const LoginForm = ({ onSubmit, loading = false, error = '' }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 sm:px-0">
      <form onSubmit={handleSubmit} className="space-y-5 px-5">
        {/* Input Usuario */}
        <Input
          type="text"
          name="username"
          placeholder="Usuario"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <PasswordInput
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <Button
          type="submit"
          loading={loading}
          disabled={!formData.username || !formData.password}
        >
          AUTENTICAR
        </Button>

        {error && (
          <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-[4px]">
            <p className="text-red-400 text-center text-sm">
              {error}
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default LoginForm;