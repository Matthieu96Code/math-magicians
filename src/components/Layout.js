import {
  // BrowserRouter, Routes, Route, Link,
  Outlet,
} from 'react-router-dom';

function Layout() {
  return (
    <>
      <h1>Layout</h1>
      <Outlet />
    </>
  );
}

export default Layout;
