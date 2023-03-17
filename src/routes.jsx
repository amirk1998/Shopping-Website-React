import CartPage from './Pages/CartPage';
import CheckOutPage from './Pages/CheckOutPage';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import NotFound from './Pages/NotFound';
import ProfilePage from './Pages/ProfilePage';
import SignUpPage from './Pages/SignUpPage';

const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/cart', element: <CartPage /> },
  { path: '/checkout', element: <CheckOutPage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/signup', element: <SignUpPage /> },
  { path: '/profile', element: <ProfilePage /> },

  { path: '*', element: <NotFound /> },
];

export default routes;
