import { Link, NavLink, useLocation } from 'react-router-dom';
import CartBadge from '../Cart/CartBadge';
import withRouter from '../HOC/withRouter';

const items = [
  { name: 'Home', to: '/' },
  { name: 'Cart', to: '/cart' },
  { name: 'Sign Up', to: '/signup' },
  { name: 'Login', to: '/login' },
  { name: 'Profile', to: '/profile' },
];

const Navigation = () => {
  return (
    <nav className='h-full flex items-center justify-between w-full sticky top-0 px-4'>
      <div className=''>
        <ul className='flex flex-row items-center justify-between h-full w-full'>
          <li className='mr-4'>LOGO</li>
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

      <div className='w-1/4 pr-4'>
        <ul className='flex flex-row items-center justify-between h-full w-full mr-4'>
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
              to={'/login'}
              className={(navData) =>
                navData.isActive
                  ? '  text-red-500'
                  : 'text-slate-500 hover:text-slate-800 '
              }
            >
              Login/Signup
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navigation);

// Method 2:
{
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
