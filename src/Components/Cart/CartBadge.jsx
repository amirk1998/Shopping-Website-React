import Layout from '../../Layout/Layout';
import { useCart } from '../../Providers/CartProvider';

const CartBadge = () => {
  const { cart } = useCart();

  return (
    <div className='flex items-center justify-center w-6 h-6  rounded-full bg-purple-500 text-white ml-2 mb-4 cursor-default text-sm'>
      <span className=''>{cart.length}</span>
    </div>
  );
};

export default CartBadge;
