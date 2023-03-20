import CheckOut from '../Components/Checkout/Checkout';
import Layout from '../Layout/Layout';
const CheckOutPage = () => {
  return (
    <Layout>
      <div className='flex flex-col items-center justify-center mx-8'>
        <CheckOut />
      </div>
    </Layout>
  );
};

export default CheckOutPage;
