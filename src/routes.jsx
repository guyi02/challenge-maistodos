import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Admin from './pages/Admin';
import PaymentSuccess from './pages/PaymentSuccess';

export const ROUTES = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/admin',
    element: <Admin />,
  },
  {
    path: '/payment-success',
    element: <PaymentSuccess />,
  },
]);
