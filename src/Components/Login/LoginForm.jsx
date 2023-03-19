import Input from '../../Common/Input';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/loginService';
import { useState } from 'react';
import ToastifyComp from '../Toastify/Toastify';
import { useAuthAction } from '../../Providers/AuthProvider';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is Required'),
  password: Yup.string().required('Password is Required'),
});

const LOCAL_STORAGE_AUTH_KEY = 'authState';

const LoginForm = () => {
  const [error, setError] = useState(null);

  const setAuth = useAuthAction();

  let navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      const { data } = await loginUser(values);
      setAuth(data);
      localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, JSON.stringify(data));
      setError(null);
      navigate('/');
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      }
    }
  };

  const formik = useFormik({
    // initialValues: initialValues,
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  return (
    <div className='h-screen w-1/2'>
      <form
        onSubmit={formik.handleSubmit}
        className=' flex flex-col items-center bg-gray-50 border-2 border-slate-300 shadow-md rounded-lg px-8 py-4'
      >
        <h1 className='text-center font-bold text-slate-800 text-4xl'>
          Login Form
        </h1>
        <Input formik={formik} name='email' label='Email' type='email' />
        <Input
          formik={formik}
          name='password'
          label='Password'
          type='password'
        />

        <button
          type='submit'
          disabled={!formik.isValid}
          className={
            formik.isValid
              ? 'focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 mt-4'
              : 'focus:outline-none text-white bg-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 mt-4 cursor-not-allowed'
          }
        >
          Login
        </button>

        {error && <p className='text-red-500 text-sm text-center'>{error}</p>}
        {error && <ToastifyComp text={`${error}`} type='error' />}

        <Link to={'/signup'}>
          <p className='text-blue-500 hover:text-blue-800 text-base'>
            Not Signup yet ?
          </p>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
