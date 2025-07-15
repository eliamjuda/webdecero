import { useForm } from 'react-hook-form';
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
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      username: '',
      password: ''
    }
  });

  // Observar los valores para controlar el estado del botón
  const watchedValues = watch();
  const hasValues = watchedValues.username && watchedValues.password;

  const handleFormSubmit = (formData) => {
    onSubmit(formData);
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 sm:px-0">
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-2 px-5">
        <div>
          <Input
            type="text"
            placeholder="Usuario"
            isValid={errors.username ? false : true}
            {...register('username', {
              required: 'El usuario es requerido',
              minLength: {
                value: 3,
                message: 'El usuario debe tener al menos 3 caracteres'
              },
              maxLength: {
                value: 25,
                message: 'El usuario no debe sobrepasar los 20 caracteres'
              },
              pattern: {
                value: /^[a-zA-Z0-9_]+$/,
                message: 'El usuario solo puede contener letras y números'
              }
            })}
          />
          <div className='h-[30px] p-2'>
            {errors.username && (
              <p className={`text-xs text-red-400`}>
                {errors.username.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <PasswordInput
            isValid={errors.password ? false : true}
            placeholder="Contraseña"
            {...register('password', {
              required: 'La contraseña es requerida',
              minLength: {
                value: 5,
                message: 'La contraseña debe tener al menos 5 caracteres'
              }
            })}
          />
          <div className='h-[30px] p-2'>
            {errors.password && (
              <p className={`text-xs text-red-400`}>
                {errors.password.message}
              </p>
            )}
          </div>
        </div>

        <Button
          type="submit"
          loading={loading}
          disabled={!hasValues || !isValid}
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