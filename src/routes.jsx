import CartPage from './Pages/CartPage';
import HomePage from './Pages/HomePage';
import NotFound from './Pages/NotFound';

const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/cart', element: <CartPage /> },
  { path: '*', element: <NotFound /> },
];

export default routes;
