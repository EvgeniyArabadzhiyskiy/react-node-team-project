import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  border: ${p => p.theme.borders.none};
  outline: none;
  background-color: inherit;
  color: ${p => p.theme.colors.white};;
  cursor: pointer;
`;

export const IconWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #bdbdbd;
  justify-content: space-between;
`;

export const OpenButton = styled.button`
  background-color: inherit;
`;
