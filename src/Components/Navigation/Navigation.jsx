import { Link, NavLink, useLocation } from 'react-router-dom';
import withRouter from '../HOC/withRouter';

const items = [
  { name: 'Home', to: '/' },
  { name: 'Cart', to: '/cart' },
];

const Navigation = (props) => {
  // let location = useLocation();
  // console.log(props);

  return (
    <nav className='w-[100vw]'>
      <ul className='flex flex-row items-center justify-evenly'>
        {items.map((item) => {
          return (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={(navData) =>
                  navData.isActive
                    ? '  text-red-500 '
                    : 'text-slate-400 hover:text-slate-700 '
                }
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default withRouter(Navigation);
