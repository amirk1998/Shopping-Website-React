import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import CartProvider from './Providers/CartProvider';
import routes from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from './Common/ScrollToTop';

function App() {
  return (
    <div className='App flex- flex-col bg-gray-100 w-full h-auto'>
      <CartProvider>
        <ToastContainer />
        <ScrollToTop />
        <Routes>
          {routes.map((route) => {
            return <Route {...route} key={crypto.randomUUID()} />;
          })}
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
