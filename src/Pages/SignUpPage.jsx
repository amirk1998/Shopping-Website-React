import SignUpForm from '../Components/SignUp/SignUp';
import Layout from '../Layout/Layout';

const SignUpPage = () => {
  // return <Layout>SignUp Page</Layout>;
  return (
    <Layout>
      <div className='flex items-center justify-center'>
        <SignUpForm />
      </div>
    </Layout>
  );
};

export default SignUpPage;
