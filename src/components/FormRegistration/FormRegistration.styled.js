import styled from 'styled-components';
import {
  changeMainLineColor,
  changeAfterLineColor,
  changeAfterLineWidth,
} from 'helpers/passwordIndicators';

export const PasswordIndicator = styled.div`
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background-color: ${p => changeMainLineColor(p.lenth)};

  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    width: ${p => changeAfterLineWidth(p.lenth)};
    height: 4px;
    border-radius: 2px;
    background-color: ${p => changeAfterLineColor(p.lenth)};
  }
`;
