import Layout from '../Layout/Layout';
import * as data from '../../data/productsData';
import { HiOutlineShoppingCart } from 'react-icons/hi2';
import { useCart, useCartActions } from '../Providers/CartProvider';
import { checkInCart } from '../utils/CheckInCart';
import { toast } from 'react-toastify';

const HomePage = () => {
  const dispatch = useCartActions();
  const { cart } = useCart();

  const addProductHandler = (product) => {
    // console.log(product);
    toast.success(`${product.name} added to cart!`, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <Layout>
      <section className='grid grid-cols-3 items-center gap-3 mt-2 mx-8'>
        {data.products.map((item) => {
          return (
            <div
              key={item.id}
              className='flex flex-col items-center border-2 border-purple-300 rounded-lg px-4 py-2 mt-2'
            >
              <div>
                <img
                  src={item.image}
                  alt={item.name}
                  className='w-full h-48 rounded-md'
                />
              </div>
              <div className='flex flex-col items-center justify-between w-64 my-2 bg-purple-200 px-4 py-2 rounded-lg'>
                <div className='flex items-center justify-between w-64 px-4'>
                  <p>{item.name}</p>
                  <p>{item.price} $</p>
                </div>
                <button
                  onClick={() => addProductHandler(item)}
                  className='text-purple-700 border border-purple-700 hover:border-0  hover:text-white hover:bg-purple-600 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mt-2'
                >
                  {checkInCart(cart, item) ? 'In Cart' : 'Add To Cart'}
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </Layout>
  );
};

export default HomePage;
