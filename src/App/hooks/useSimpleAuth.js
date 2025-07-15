import { useState, useEffect } from 'react';

/**
 * hook para manejar autenticación con localStorage
 * @returns {object}
 */
export const useSimpleAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // se verifica la autenticación al cargar
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('auth_token');
      const userData = localStorage.getItem('auth_user');

      if (token && userData) {
        setIsAuthenticated(true);
        setUser(JSON.parse(userData));
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  /**
   * Función para hacer login
   * @param {object} credentials - Credenciales del usuario
   * @returns {boolean} True si el login fue exitoso
   */
  const login = async (credentials) => {
    // datos falsos por lo pronto
    if (credentials.username === 'eliam' && credentials.password === '123456') {
      const mockUser = {
        id: 1,
        username: 'eliam',
        name: 'Eliam Castillo Flores',
        email: 'eliam@webdecero.com',
        location: { city: 'Ciudad de México', country: 'México' },
        birthDate: '2002-02-07',
        age: 23,
        phone: '7351272168',
        details: [
          'Información personal 1: usuario',
          'Información personal 2: usuario', 
          'Información personal 3: usuario'
        ]
      };

      const mockToken = 'mock-jwt-token-12345';

      // se guarda en localStorage
      localStorage.setItem('auth_token', mockToken);
      localStorage.setItem('auth_user', JSON.stringify(mockUser));

      // se actualiza el estado
      setIsAuthenticated(true);
      setUser(mockUser);

      return true;
    }

    return false;
  };

  /**
   * Función para hacer logout
   */
  const logout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_user');
    setIsAuthenticated(false);
    setUser(null);
  };

  return {
    isAuthenticated,
    user,
    loading,
    login,
    logout
  };
};