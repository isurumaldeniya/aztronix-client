import { Outlet } from 'react-router-dom';
import { Header, Navbar } from '../components';

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <section className="align-elements py-4">
        <Outlet />
      </section>
    </>
  );
};
export default HomeLayout;
