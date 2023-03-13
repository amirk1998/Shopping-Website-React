import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import CartProvider from './Providers/CartProvider';
import routes from './routes';

function App() {
  return (
    <div className='App flex- flex-col bg-gray-100 w-full h-auto'>
      <CartProvider>
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
