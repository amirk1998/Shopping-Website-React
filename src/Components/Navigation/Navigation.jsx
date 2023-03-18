import { NavLink, useNavigate, useParams, useLocation } from 'react-router-dom';
import { useAuth } from '../../Providers/AuthProvider';
import CartBadge from '../Cart/CartBadge';

const Navigation = () => {
  const userData = useAuth();
  let navigate = useNavigate();
  let params = useParams();
  let location = useLocation();

  // let navRoutes = { ...navigate, ...params, ...location };
  // console.log(navRoutes);

  return (
    <nav className='h-full flex items-center justify-between w-full sticky top-0 px-4'>
      <div className=''>
        <ul className='flex flex-row items-center justify-between h-full w-full'>
          <li className='mr-4 text-slate-400'>LOGO</li>
          <li>
            <NavLink
              to={'/'}
              className={(navData) =>
                navData.isActive
                  ? '  text-red-500'
                  : 'text-slate-500 hover:text-slate-800 '
              }
            >
              Home
            </NavLink>
          </li>
        </ul>
      </div>

      <div className='w-[20%]'>
        <ul className='flex flex-row items-center justify-between h-full w-full mr-2 '>
          <li>
            <NavLink
              to={'/cart'}
              className={(navData) =>
                navData.isActive
                  ? '  text-red-500'
                  : 'text-slate-500 hover:text-slate-800 '
              }
            >
              <div className='flex items-center'>
                Cart
                <CartBadge />
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={userData ? '/profile' : '/login'}
              className={(navData) =>
                navData.isActive
                  ? '  text-red-500'
                  : 'text-slate-500 hover:text-slate-800 '
              }
            >
              {userData ? 'Profile' : 'Login/Signup'}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

// Method 2:
{
  // const items = [
  //   { name: 'Home', to: '/' },
  //   { name: 'Cart', to: '/cart' },
  //   { name: 'Sign Up', to: '/signup' },
  //   { name: 'Login', to: '/login' },
  //   { name: 'Profile', to: '/profile' },
  // ];
  /* <ul className='flex flex-row items-center justify-evenly h-full w-full'>
        {items.map((item) => {
          return (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={(navData) =>
                  navData.isActive
                    ? '  text-red-500'
                    : 'text-slate-500 hover:text-slate-800 '
                }
              >
                {item.name === 'Cart' ? (
                  <div className='flex items-center'>
                    {item.name}
                    <CartBadge />
                  </div>
                ) : (
                  item.name
                )}
              </NavLink>
            </li>
          );
        })}
      </ul> */
}
