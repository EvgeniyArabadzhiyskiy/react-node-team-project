import SharedLayout from 'components/SharedLayout';
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
  Blur,
  Container,
  Wrapper,
  TabletWrapper,
  SideBar,
} from './Dashboard.styled';

const DashboardPage = () => {
  const isMobie = useMedia('(max-width: 767px)');
  const isTablet = useMedia('(min-width: 768px) and (max-width: 1279px)');
  const isDesktop = useMedia('(min-width: 1280px)');

  return (
    <SharedLayout>
      <Header />
      <main>
        <Section bgImg={bgImg}>
          {isMobie ? (
            <Blur>
              <Container>
                <Wrapper>
                  <Navigation />
                  <Balance />
                  <Suspense fallback={null}>
                    <Outlet />
                  </Suspense>
                </Wrapper>
              </Container>
            </Blur>
          ) : null}
          {isTablet ? (
            <Blur>
              <Container>
                <Wrapper>
                  <TabletWrapper>
                    <Navigation />
                    <Balance />
                  </TabletWrapper>
                  <Currency />
                </Wrapper>
                <div>
                  <Suspense fallback={null}>
                    <Outlet />
                  </Suspense>
                </div>
              </Container>
            </Blur>
          ) : null}
          {isDesktop ? (
            <Blur>
              <Container>
                <Wrapper>
                  <SideBar>
                    <Navigation />
                    <Balance />
                    <Currency />
                  </SideBar>
                  <div>
                    <Suspense fallback={null}>
                      <Outlet />
                    </Suspense>
                  </div>
                </Wrapper>
              </Container>
            </Blur>
          ) : null}
        </Section>
      </main>
    </SharedLayout>
  );
};

export default DashboardPage;
