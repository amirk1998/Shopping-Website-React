import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import CartProvider from './Providers/CartProvider';
import routes from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from './Common/ScrollToTop';
import AuthProvider from './Providers/AuthProvider';

function App() {
  return (
    <div className='App flex- flex-col bg-gray-100 w-full min-h-full h-[150vh]'>
      <AuthProvider>
        <CartProvider>
          <ToastContainer />
          <ScrollToTop />
          <Routes>
            {routes.map((route) => {
              return <Route {...route} key={crypto.randomUUID()} />;
            })}
          </Routes>
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
