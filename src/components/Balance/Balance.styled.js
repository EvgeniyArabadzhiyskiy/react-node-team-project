import styled from 'styled-components';

export const Container = styled.div`
  min-width: 280px;
  height: 80px;
  margin-bottom: 32px;
  padding: 8px 40px;
  border-radius: 30px;

  background-color: ${p => p.theme.colors.primaryBg};

  @media ${p => p.theme.media.mediumToLarge} {
    width: 336px;
    margin-bottom: 0;
  }
  
  @media ${p => p.theme.media.large} {
    width: 395px;
  }
`;

export const Title = styled.p`
  margin-bottom: 12px;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.5;

  color: ${p => p.theme.colors.secondaryText};
  text-transform: uppercase;
`;

export const CurrencySign = styled.span`
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: 1.5;

  color: ${p => p.theme.colors.primaryText};
`;

export const Text = styled.span`
  font-family: ${p => p.theme.fonts.headingBold};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: 1.5;

  color: ${p => p.theme.colors.primaryText};
`;
