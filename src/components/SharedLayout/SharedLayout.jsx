import Currency from 'components/Currency/Currency';
import Header from 'components/Header/Header';
import Navigation from 'components/Navigation/Navigation';

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

        {children}
      </div>
    </div>
  );
};

export default SharedLayout;
