import Currency from 'components/Currency';
import Header from 'components/Header';
import Navigation from 'components/Navigation';
import Balance from 'components/Balance';
import { useMedia } from 'react-use';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import bgImg from '../../images/Rectangle.png';
import {
  Section,
  Container,
  SideBar,
  DesctopWrapper,
} from './Dashboard.styled';

const DashboardPage = () => {
  const isMobile = useMedia('(max-width: 767px)');

  return (
    <>
      <Header />
      <Section bgImg={bgImg}>
        <Container>
          <DesctopWrapper>
            <SideBar>
              <div>
                <Navigation />
                <Balance />
              </div>
              {!isMobile && <Currency />}
            </SideBar>
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          </DesctopWrapper>
        </Container>
      </Section>
    </>
  );
};

export default DashboardPage;
