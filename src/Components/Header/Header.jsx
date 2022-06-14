import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const { header, container, titleApp, navigantion, nav, activeLink } = styles;

export const Header = () => {
  const toggActive = ({ isActive }) =>
    isActive ? [navigantion, activeLink].join(' ') : navigantion;

  return (
    <div className={header}>
      <nav className={[nav, container].join(' ')}>
        <p className={titleApp}>Notes App</p>
        <NavLink className={toggActive} to="/">
          Notes
        </NavLink>
        <NavLink className={toggActive} to="/about">
          About
        </NavLink>
      </nav>
    </div>
  );
};
