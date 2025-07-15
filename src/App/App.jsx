import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Views/Login/Login';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Profile from './Views/Profile/Profile';
import { useAuth } from './context/AuthContext';



function App() {
  const { isAuthenticated, loading } = useAuth();

  // Mostrar loading mientras verifica autenticación
  if (loading) {
    return (
      <div className="min-h-screen bg-[--principal-color] w-full flex items-center justify-center">
        <div className="text-white">
          <div className="flex items-center">
            <svg className="animate-spin -ml-1 mr-3 h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
            </svg>
            Cargando aplicación...
          </div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Ruta raíz - redirecciona según autenticación */}
          <Route 
            path="/" 
            element={
              <Navigate 
                to={isAuthenticated ? "/profile" : "/login"} 
                replace 
              />
            } 
          />
          
          {/* Ruta de login */}
          <Route path="/login" element={<Login />} />
          
          {/* Ruta protegida de profile */}
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Profile />
              </ProtectedRoute>
            } 
          />
          
          {/* Ruta 404 */}
          <Route 
            path="*" 
            element={
              <div className="min-h-screen w-full bg-[--principal-color] flex items-center justify-center">
                <div className="text-white text-center">
                  <h1 className="text-4xl font-bold mb-4">404</h1>
                  <p className="text-gray-300">Página no encontrada</p>
                </div>
              </div>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
