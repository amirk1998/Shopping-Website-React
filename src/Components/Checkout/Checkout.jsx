import { Link } from 'react-router-dom';
import { useAuth } from '../../Providers/AuthProvider';

const CheckOut = () => {
  const auth = useAuth();

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

  return (
    <div className='flex flex-col items-center justify-center text-lg border-2 border-slate-400 px-8 py-4 rounded-xl gap-y-4'>
      <p>Name : {auth.name}</p>
      <p> Email : {auth.email} </p>
      <p>Tel : {auth.phoneNumber}</p>
    </div>
  );
};

export default CheckOut;
