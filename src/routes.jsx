import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Admin from './pages/Admin';
import PaymentSuccess from './pages/PaymentSuccess';

export const ROUTES = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
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
