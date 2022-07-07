import { Outlet } from 'react-router-dom';
import Encabezamiento from './Encabezado.js';
import Principal from './Principal.tsx';
import Footer from './Footer.js';

function Layout() {
  return (
    <>
      <Encabezamiento></Encabezamiento>
      <Principal>
        <Outlet></Outlet>
      </Principal>
      <Footer></Footer>
    </>
  );
}

export default Layout;
