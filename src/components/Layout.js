import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => (
  <>
    <h1>Math Magicians</h1>
    <Navbar />
    <Outlet />
  </>
);

export default Layout;
