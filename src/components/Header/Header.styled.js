import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${p => p.theme.colors.primaryBg};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  @media ${p => p.theme.media.small} {
    max-width: 480px;
    padding: 15px 20px;
  }

  @media ${p => p.theme.media.medium} {
    width: 768px;
    padding: 20px 32px;
  }

  @media ${p => p.theme.media.large} {
    width: 1280px;
    padding: 20px 16px;
  }
`;

export const UserBox = styled.div`
  display: flex;
  align-items: center;
  color: ${p => p.theme.colors.secondaryText};
`;

export const ButtonExit = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;

  color: ${p => p.theme.colors.secondaryText};
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.m};

  padding-right: 0;

  @media ${p => p.theme.media.small} {
    padding-left: 8px;
  }

  @media ${p => p.theme.media.medium} {
    padding-left: 12px;
    margin-left: 12px;
    border-left: 1px solid #bdbdbd;
  }

  &:hover {
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.15);
  }
  &:focus {
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.15);
  }
`;

export const Text = styled.span`
  @media ${p => p.theme.media.small} {
    display: none;
  }
  margin-left: 8px;
`;

export const TextName = styled.span`
  font-size: ${p => p.theme.fontSizes.m};
  margin-left: 8px;
`;
