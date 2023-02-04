import styled from 'styled-components';

export const StyledChartWraper = styled.div`
  position: relative;
  align-self: flex-start;
  margin-bottom: 32px;

  /* @media ${p => p.theme.media.medium} {
    width: 314px;
  } */

  /* @media ${p => p.theme.media.large} {
    width: 288px;
  } */
`;

export const StyledTitle = styled.h2`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.normal};
  margin: 20px 0;

  @media ${p => p.theme.media.large} {
    margin: 32px 0 20px 20px;
  }
`;
