import { useAuth } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';
import ToastifyComp from '../Toastify/Toastify';
import { useEffect } from 'react';

const ProfileComponent = () => {
  const userData = useAuth();
  const { name, email, phoneNumber } = userData;

  if (!userData) {
    return (
      <div className='bg-white rounded-xl flex flex-col items-center px-8 py-4 mt-4 w-full h-screen'>
        <h2 className='text-2xl mb-4'>You have not Logged In !</h2>
        <Link to={'/login'}>
          <p className='text-blue-500 hover:text-blue-800 text-lg'>
            Please Login
          </p>
        </Link>
        <ToastifyComp text='You have not Logged In !' type='warn' />
      </div>
    );
  }

  return (
    <div className='bg-white rounded-xl flex flex-col items-center px-8 py-4 mt-4 w-full h-screen'>
      <h1 className='text-4xl mt-2 mb-6'>Profile Details</h1>
      <table className='w-1/3 text-lg text-center text-slate-700 border border-slate-300 rounded-xl'>
        <thead className='text-lg text-gray-600 uppercase bg-purple-200 text-center w-full '>
          <tr>
            <td className='px-16 py-2'>Property</td>
            <td className='px-16 py-2'>Detail</td>
          </tr>
        </thead>
        <tbody>
          <tr className='bg-white border-b-2 border-b-gray-200'>
            <td className='px-16 py-2'>Name</td>
            <td className='px-16 py-2'>{name}</td>
          </tr>
          <tr className='bg-white border-b-2 border-b-gray-200'>
            <td className='px-16 py-2'>PhoneNumber</td>
            <td className='px-16 py-2'>{phoneNumber}</td>
          </tr>
          <tr className='bg-white border-b-2 border-b-gray-200'>
            <td className='px-16 py-2'>Email</td>
            <td className='px-16 py-2'>{email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProfileComponent;
