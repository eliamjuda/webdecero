import { Navigate } from 'react-router-dom';

/**
 * ProtectedRoute - protege rutas
 */
const ProtectedRoute = ({ children, isAuthenticated, redirectTo = '/login' }) => {
  return isAuthenticated ? children : <Navigate to={redirectTo} replace />;
};

export default ProtectedRoute;