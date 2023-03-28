import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import styles from '../styles/Layout.module.css';

const Layout = () => (
  <div className={styles.layout}>
    <div className={styles.navbar}>
      <h1 className={styles.mainTitle}>Math Magicians</h1>
      <Navbar />
    </div>
    <Outlet />
  </div>
);

export default Layout;
