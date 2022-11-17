import SharedLayout from 'components/SharedLayout/SharedLayout';

const DashboardPage = ({ children }) => {
  return (
    <div>
      <SharedLayout>{children}</SharedLayout>
    </div>
  );
};

export default DashboardPage;
