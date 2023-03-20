import { Link } from 'react-router-dom';
import { useAuth } from '../../Providers/AuthProvider';
import { useCart } from '../../Providers/CartProvider';

const CheckOut = () => {
  const auth = useAuth();
  const { cart, totalPrice, discount } = useCart();
  const tableHeaders = ['Product', 'Price', 'Quantity', 'Discount', 'Total'];

  if (!auth) {
    return (
      <div className='flex flex-col items-center justify-center'>
        <h2>Please Signup or Login</h2>
        <Link to={`/signup?redirect=checkout`}>
          <p className='text-blue-500 hover:text-blue-800 text-base'>Sign Up</p>
        </Link>
      </div>
    );
  }

  if (!cart.length) {
    return (
      <div>
        <main className='flex flex-col items-center gap-3 mt-2 mx-8 h-screen'>
          <h2 className='text-center text-2xl'>Cart is empty</h2>
          <Link to={'/'}>
            <p className='text-blue-500 hover:text-blue-800 text-base'>
              Go to Shopping
            </p>
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className='w-full flex justify-between px-8 gap-x-2'>
      <div className='w-3/4 flex flex-col items-center mt-2'>
        <h1 className='text-2xl xl:text-4xl mb-2'>Checkout Details</h1>
        {/* Cart Detail */}
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
                        <div className='w-8 h-8 border-2 rounded-lg border-purple-400 text-purple-600'>
                          {item.quantity}
                        </div>
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
        {/* Summary Price  */}
      </div>

      {/*  */}
      <div className=' flex flex-col items-center mt-2 w-[20%] pr-4'>
        <h1 className='text-2xl xl:text-4xl mb-2'>Profile Details</h1>
        <table className='w-1/3 text-lg text-center text-slate-700 border border-slate-300 rounded-xl'>
          <thead className='text-base text-gray-600 uppercase bg-purple-200 text-center w-full '>
            <tr>
              <td className=' p-2'>Property</td>
              <td className=' p-2'>Detail</td>
            </tr>
          </thead>
          <tbody>
            <tr className='bg-white border-b-2 border-b-gray-200'>
              <td className=' p-2'>Name</td>
              <td className=' p-2'>{auth.name}</td>
            </tr>
            <tr className='bg-white border-b-2 border-b-gray-200'>
              <td className=' p-2'>Tel</td>
              <td className=' p-2'>{auth.phoneNumber}</td>
            </tr>
            <tr className='bg-white border-b-2 border-b-gray-200'>
              <td className=' p-2'>Email</td>
              <td className=' p-2'>{auth.email}</td>
            </tr>
          </tbody>
        </table>
        <div className='mt-4 w-full'>
          <h2 className='text-center text-xl mb-2 xl:text-2xl xl:mb-4 text-slate-700 font-bold'>
            Cart Summary
          </h2>
          <div className='flex flex-col items-center w-full'>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
