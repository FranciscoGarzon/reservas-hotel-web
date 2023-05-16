import { Header } from '@components';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';

const Layout = () => {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
