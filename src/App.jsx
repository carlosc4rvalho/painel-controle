import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Login from './pages/Login/Login';
import Admin from './pages/Admin/Admin';
import CadastroUsuario from './pages/CadastroUsuario/CadastroUsuario';
import RotaProtegida from './components/RotaProtegida';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route index path="/" element={<Login />} />
          <Route path="/cadastro" element={<CadastroUsuario />} />
          <Route path="/Palestra" element={<RotaProtegida><Admin /></RotaProtegida>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
