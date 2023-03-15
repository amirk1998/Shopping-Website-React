import LoginForm from '../Components/Login/LoginForm';
import Layout from '../Layout/Layout';

const LoginPage = () => {
  return (
    <Layout>
      <div className='flex items-center justify-center mt-4'>
        <LoginForm />
      </div>
    </Layout>
  );
};

export default LoginPage;
