import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';

function NotFound(props) {
  return (
    <Layout>
      <div className='my-8 flex flex-col items-center justify-center rounded-lg'>
        <p className='text-center text-6xl text-red-500 mb-4'>Error 404</p>
        <p className='text-center text-2xl'>This Page is not found !!!</p>
        <Link to='/' className='text-violet-500 hover:text-violet-700 my-2'>
          Go to Home Page
        </Link>
      </div>
    </Layout>
  );
}

export default NotFound;
