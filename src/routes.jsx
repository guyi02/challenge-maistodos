import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';

export const ROUTES = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);
