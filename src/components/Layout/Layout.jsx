import { Footer, Header } from '@components';
import { Outlet } from 'react-router';

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
