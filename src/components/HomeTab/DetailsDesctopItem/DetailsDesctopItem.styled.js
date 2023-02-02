import styled from 'styled-components';
import { CommonStyle } from 'components/HomeTab/HomeTabDesctop/HomeTabDesctop.styled';

export const StyledItem = styled.li`
  ${CommonStyle};
  position: relative;
  overflow: hidden;

  height: 52px;

  &:not(:last-child) {
    border-bottom: 1px solid #dcdcdf;
  }

  p {
    &:nth-child(4) {
      padding-right: 32px;
    }
  }
`;
