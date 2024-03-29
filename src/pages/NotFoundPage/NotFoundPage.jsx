import { Link } from 'react-router-dom';
import {
  Section,
  Container,
} from '../LoginPage/LoginPage.styled';
import { useMedia } from 'react-use';
import errorImg from '../../images/404error.webp'
import { Box } from 'components/Box';
import { Btn, Text, Title } from './NotFoundPage.styled';

const NotFoundPage = () => {
  const isWideMobie = useMedia('(max-width: 767px)');
  const isWideTablet = useMedia('(min-width: 768px) and (max-width: 1279px)');
  const isWideComputer = useMedia('(min-width: 1280px)');

  return (
      <Section>
        {isWideMobie && (
          <Container>
            <Box display="flex" flexDirection="column" alignItems="center" p={3}>
              <img src={errorImg} alt='error 404 Not Found' width="270px" />
              <Box display="flex" flexDirection="column" alignItems="center">
                <Title>Whoops!</Title>
                <Text>We couldn't connect you to the page you are looking for.</Text>

                <Link to='/home'>
                  <Btn type='button'>Go back to Home</Btn>
                </Link>
              </Box>
            </Box>
          </Container>
        )}
        {isWideTablet && (
          <Container>
            <Box display="flex" flexDirection="column" alignItems="center">
              <img src={errorImg} alt='error 404 Not Found' width="400px" />
              <Box display="flex" flexDirection="column" alignItems="center">
                <Title>Whoops!</Title>
                <Text>We couldn't connect you to the page you are looking for.</Text>

                <Link to='/home'>
                  <Btn type='button'>Go back to Home</Btn>
                </Link>
              </Box>
            </Box>
          </Container>
        )}
        {isWideComputer && (
          <>
            <Container>
              <Box display="flex" flexDirection="row-reverse" justifyContent="space-around" alignItems="center">
                <img src={errorImg} alt='error 404 Not Found' />
                <Box>
                  <Title>Whoops!</Title>
                  <Text>We couldn't connect you to the page you are looking for.</Text>

                  <Link to='/home'>
                    <Btn type='button'>Go back to Home</Btn>
                  </Link>
                </Box>
              </Box>
            </Container>
          </>
        )}
      </Section>
  );
};

export default NotFoundPage;