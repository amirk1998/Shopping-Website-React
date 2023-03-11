import Cart from './Components/Cart/Cart';
import HomePage from './Pages/HomePage';
import NotFound from './Pages/NotFound';

const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/cart', element: <Cart /> },
  { path: '*', element: <NotFound /> },
];

export default routes;
