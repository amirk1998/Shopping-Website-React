import ProfileComponent from '../Components/Profile/Profile';
import Layout from '../Layout/Layout';

const ProfilePage = () => {
  return (
    <Layout>
      {/* <h1 className='text-center'>Profile Page</h1> */}
      <div className='flex flex-col items-center justify-center mx-8'>
        <ProfileComponent />
      </div>
    </Layout>
  );
};

export default ProfilePage;
