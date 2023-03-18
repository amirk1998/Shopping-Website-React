import { useCart, useCartActions } from '../../Providers/CartProvider';
import {
  HiOutlineMinusSmall,
  HiOutlinePlusSmall,
  HiOutlineTrash,
  HiShoppingCart,
} from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const CartList = () => {
  const { cart, totalPrice, discount } = useCart();
  const dispatch = useCartActions();
  // console.log(cart);
  // console.log(totalPrice);

  const tableHeaders = ['Product', 'Price', 'Quantity', 'Discount', 'Total'];

  const incrementHandler = (cartItem) => {
    dispatch({ type: 'ADD_TO_CART', payload: cartItem });
  };

  const decrementHandler = (cartItem) => {
    dispatch({ type: 'DECREMENT_PRODUCT', payload: cartItem });
  };

  const removeHandler = (cartItem) => {
    dispatch({ type: 'REMOVE_PRODUCT', payload: cartItem });
  };

  if (!cart.length) {
    return (
      <divss>
        <main className='flex flex-col items-center gap-3 mt-2 mx-8 h-screen'>
          <h2 className='text-center text-2xl'>Cart is empty</h2>
        </main>
      </divss>
    );
  }

  return (
    <div>
      <main className='flex gap-x-16 mt-8 mx-8 h-screen'>
        <section className='w-3/4'>
          <h2 className='text-center text-xl mb-2 xl:text-2xl xl:mb-4 font-bold text-slate-700'>
            Cart Details
          </h2>
          <div>
            <table className='w-full text-base text-center text-slate-700 border border-gray-300 rounded-lg'>
              <thead className='text-base text-gray-600 uppercase bg-purple-200 text-center w-full '>
                <tr className=''>
                  {tableHeaders.map((header) => (
                    <th scope='col' key={header} className='px-4 py-2'>
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => {
                  return (
                    // Product Row
                    <tr
                      key={crypto.randomUUID()}
                      className='bg-white border-b-2 border-b-gray-200'
                    >
                      <td
                        scope='row'
                        key={crypto.randomUUID()}
                        className='px-4 py-2'
                      >
                        <div className='flex items-center px-4'>
                          <button
                            onClick={() => removeHandler(item)}
                            className='flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white rounded-full w-7 h-7 mr-6'
                          >
                            <HiOutlineTrash className='w-5 h-5' />
                          </button>
                          <img
                            src={item.image}
                            alt={item.name}
                            className='w-16 h-12 bg-red-200 mr-6'
                          />
                          <p>{item.name}</p>
                        </div>
                      </td>
                      <td key={crypto.randomUUID()} className='text-green-600'>
                        $ {item.price}
                      </td>
                      <td key={crypto.randomUUID()} className=''>
                        <div className='flex items-center justify-center'>
                          <button
                            onClick={() => decrementHandler(item)}
                            className='flex items-center justify-center w-8 h-8 border-2 border-purple-400 rounded-tl-md rounded-bl-md text-purple-600 '
                          >
                            <HiOutlineMinusSmall className='w-4 h-4 text-purple-600 ' />
                          </button>

                          <div className='w-8 h-8 border-t-2 border-b-2 border-purple-400 text-purple-600'>
                            {item.quantity}
                          </div>

                          <button
                            onClick={() => incrementHandler(item)}
                            className='flex items-center justify-center w-8 h-8 border-2 border-purple-400 text-purple-600 rounded-tr-md rounded-br-md'
                          >
                            <HiOutlinePlusSmall className='w-4 h-4 ' />
                          </button>
                        </div>
                      </td>
                      <td className='text-green-600'>
                        $ {item.discount * item.quantity}
                      </td>
                      <td className='text-green-600'>
                        $ {item.offPrice * item.quantity}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
        <section className='w-[16%] xl:w-[20%]'>
          <h2 className='text-center text-xl mb-2 xl:text-2xl xl:mb-4 text-slate-700 font-bold'>
            Cart Summary
          </h2>
          <div className='flex flex-col items-center h-96'>
            <table className='w-full text-base text-center text-slate-700 border border-gray-300 rounded-lg'>
              <thead className='text-base text-gray-600 uppercase bg-purple-200 text-center '>
                <tr>
                  <th colSpan='2' className='px-4 py-2'>
                    Cart Totals
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  key={crypto.randomUUID()}
                  className='bg-white border-b-2 border-b-gray-300'
                >
                  <td className='px-4 py-5'>Total Price</td>
                  <td className='px-4 py-5 text-green-600'>${totalPrice}</td>
                </tr>
                <tr
                  key={crypto.randomUUID()}
                  className='bg-white border-b-2 border-b-gray-300 px-4 py-2'
                >
                  <td className='px-4 py-5'>Discount</td>
                  <td className='px-4 py-5 text-green-600'>${discount}</td>
                </tr>
                <tr
                  key={crypto.randomUUID()}
                  className='bg-white border-b-2 border-b-gray-300 px-4 py-2'
                >
                  <td className='px-4 py-5'>Net Price</td>
                  <td className='px-4 py-5 text-green-600'>
                    ${totalPrice - discount}
                  </td>
                </tr>
              </tbody>
            </table>
            <Link to={'/checkout'}>
              <button className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-2.5  xl:px-5 text-center inline-flex items-center mt-2 '>
                <HiShoppingCart className='mr-2' /> Go to Checkout
              </button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CartList;
