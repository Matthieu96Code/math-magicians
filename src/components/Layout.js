import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/Math.css';

const Layout = () => (
  <div className="layout">
    <div className="mainbar">
      <h1 className="mainTitle">Math Magicians</h1>
      <Navbar />
    </div>
    <Outlet />
  </div>
);

export default Layout;
