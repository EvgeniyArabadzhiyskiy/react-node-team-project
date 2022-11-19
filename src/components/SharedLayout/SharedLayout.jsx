import Currency from 'components/Currency/Currency';
import Header from 'components/Header/Header';
import Navigation from 'components/Navigation/Navigation';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div style={{ display: 'flex', alignItems: "flex-end", justifyContent: 'space-evenly' }}>
        <div>
          <Navigation />
          <h2>Balanse 24 000</h2>
          <Currency />
        </div>

    <Suspense fallback={null}>
      <Outlet />
    </Suspense>
        
      </div>
    </div>
  );
};

export default SharedLayout;
