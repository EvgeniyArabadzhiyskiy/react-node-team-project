import { useMedia } from 'react-use';

import Chart from '../Chart';
import Table from '../Table';

import {
  StyledChartWraper,
  StyledTitle,
  StyledContentWraper,
} from './DiagramTab.styled';

const DiagramTab = () => {
  const isMobie = useMedia('(max-width: 767px)');

  return (
    <>
      {isMobie ? (
        <>
          <StyledTitle>Statistics</StyledTitle>

          <StyledChartWraper>
            <Chart />
          </StyledChartWraper>

          <Table />
        </>
      ) : (
        <>
          <StyledTitle>Statistics</StyledTitle>
          <StyledContentWraper>
            <StyledChartWraper>
              <Chart />
            </StyledChartWraper>

            <Table />
          </StyledContentWraper>
        </>
      )}
    </>
  );
};

export default DiagramTab;
