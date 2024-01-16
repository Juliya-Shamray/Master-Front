import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      {/* <Header /> */}
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default SharedLayout;
