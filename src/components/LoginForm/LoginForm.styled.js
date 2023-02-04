import styled from 'styled-components';

export const FormWrap = styled.div`
  width: 340px;
  padding: 30px 20px;
  background-color: rgba(0, 0, 0, 0.7);
  border: 10px solid rgba(255, 255, 255, 0.2);
  background-clip: padding-box;

  transform: scaleY(0);
  transition: transform 400ms linear 100ms;
  transform: ${p => (p.isScale ? 'scaleY(1)' : 'scaleY(0)')};

  @media ${p => p.theme.media.medium} {
    width: 500px;
    margin-right: 50px;
    padding: 36px 60px;
  }
`;

export const LogoWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
`;

export const StyledButton = styled.button`
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
`;
