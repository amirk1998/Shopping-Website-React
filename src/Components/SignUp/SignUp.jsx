import Layout from '../../Layout/Layout';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from '../../Common/Input';
import { useState } from 'react';

const initialValues = {
  name: '',
  phoneNumber: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=[\]{}|\\,./?><-]).{8,}$/;

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is Required')
    .min(6, 'Name length is not valid'),
  phoneNumber: Yup.string()
    .required('Phone Number is Required')
    .matches(/^[0-9]{11}$/, 'Invalid Phone Number')
    .nullable(),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is Required'),
  password: Yup.string().required('Password is Required').matches(
    // /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    passwordRegex,
    'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
  ),
  passwordConfirm: Yup.string()
    .required('Password Confirmation is Required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const SignUpForm = () => {
  // const [formValues, setFormValues] = useState(null);

  const onSubmit = (values) => {
    console.log(values);
    // const data = { ...values, DateCreated: new Date().toLocaleString() };
    // addNewUser(data)
    //   .then((res) => console.log(res))
    //   .catch((error) => console.log(error));
    // // console.log(data);
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
          Sign up Form
        </h1>
        <Input formik={formik} name='name' label='Name' />
        <Input formik={formik} name='phoneNumber' label='Phone Number' />
        <Input formik={formik} name='email' label='Email' />
        <Input
          formik={formik}
          name='password'
          label='Password'
          type='password'
        />
        <Input
          formik={formik}
          name='passwordConfirm'
          label='Password Confirm'
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
          Submit Data
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
