import { GlobalStyle } from 'components/GlobalStyle';

const SharedLayout = ({ children }) => {
  return (
    <div>
      {children}
      <GlobalStyle />
    </div>
  );
};

export default SharedLayout;