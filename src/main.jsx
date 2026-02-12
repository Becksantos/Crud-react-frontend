import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Configurando as rotas 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/index.jsx';
import Usuarios from './pages/User/usuarios.jsx';
import Cadastro from './pages/User/cadastro.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/usuarios',
    element: <Usuarios />,
  },
  {
    path: '/cadastro',
    element: < Cadastro mode="create" />,
  },
  {
    path: '/usuarios/editar/:id',
    element: < Cadastro mode="edit" />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>

);