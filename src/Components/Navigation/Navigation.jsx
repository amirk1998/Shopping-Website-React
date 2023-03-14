import { Link, NavLink, useLocation } from 'react-router-dom';
import CartBadge from '../Cart/CartBadge';
import withRouter from '../HOC/withRouter';

const items = [
  { name: 'Home', to: '/' },
  { name: 'Cart', to: '/cart' },
];

const Navigation = (props) => {
  // let location = useLocation();
  // console.log(props);

  return (
    <nav className='h-full flex items-center justify-between w-full'>
      <ul className='flex flex-row items-center justify-evenly h-full w-full'>
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
      </ul>
    </nav>
  );
};

export default withRouter(Navigation);
