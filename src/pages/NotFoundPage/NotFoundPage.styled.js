import styled from 'styled-components';

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes.s};
  margin-bottom: ${p => p.theme.space[5]}px;
  text-align: center;
  @media screen and (min-width: 768px) {
    margin-bottom: ${p => p.theme.space[5]}px;
  }
  @media screen and (min-width: 1280px) {
    font-size: ${p => p.theme.fontSizes.m};
  }
`;

export const Title = styled.p`
  font-family: ${p => p.theme.fonts.headingBold};
  font-size: ${p => p.theme.fontSizes.l};
  text-transform: uppercase;
  margin-bottom: ${p => p.theme.space[1]}px;
  @media screen and (min-width: 1280px) {
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;

export const Btn = styled.button`
  display: block;
  padding: ${p => p.theme.space[1]}px;
  min-width: 280px;
  cursor: pointer;
  text-transform: uppercase;
  border: none;
  border-radius: ${p => p.theme.radii.btn};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body};
  letter-spacing: ${p => p.theme.letterSpacings.body};
  color: ${p => p.theme.colors.primaryBtn};
  background-color: ${p => p.theme.colors.primaryBgBtn};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover, :focus {
    background-color: ${p => p.theme.colors.navIconBgActive};
  }

  @media screen and (min-width: 768px) {
    min-width: 300px;
  }
`;