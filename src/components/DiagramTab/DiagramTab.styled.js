import styled from 'styled-components';

export const StyledChartWraper = styled.div`
  margin-bottom: 32px;

  @media (min-width: 768px) {
    width: 336px;
  }

  @media (min-width: 1280px) {
    width: 288px;
  }
`;

export const StyledTitle = styled.h2`
  font-family: 'Circe-Regular';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;
  color: #000000;
  margin: 20px 0;

  @media (min-width: 1280px) {
    margin: 32px 0 20px 20px;
  }
`;
