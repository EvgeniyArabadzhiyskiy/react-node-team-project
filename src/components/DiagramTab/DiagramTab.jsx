import { Box } from 'components/Box';
import { useMedia } from 'react-use';

import Chart from '../Chart';
import Table from '../Table';

import {
  StyledChartWraper,
  StyledTitle,
} from './DiagramTab.styled';

const DiagramTab = () => {
  const isMobie = useMedia('(max-width: 767px)');

  return (
    <>
      {isMobie ? (
        <div>
          <StyledTitle>Statistics</StyledTitle>

          <StyledChartWraper>
            <Chart />
          </StyledChartWraper>

          <Table />
        </div>
      ) : (
        <div>
          <StyledTitle>Statistics</StyledTitle>
          <Box display="flex">
            <StyledChartWraper>
              <Chart />
            </StyledChartWraper>

            <Table />
          </Box>
        </div>
      )}
    </>
  );
};

export default DiagramTab;
