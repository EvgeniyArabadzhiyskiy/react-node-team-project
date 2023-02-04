import { Box } from 'components/Box';
import { useMedia } from 'react-use';
import { breakpoints } from 'styles/breakpoints';

import Chart from '../Chart';
import Table from '../Table';
import { StyledChartWraper,  StyledTitle } from './DiagramTab.styled';

const DiagramTab = () => {
  const isMobie = useMedia(breakpoints.small);
  const isDesctop = useMedia(breakpoints.medium);

  return (
    <>
      { isMobie && (
        <div>
          <StyledTitle>Statistics</StyledTitle>
          <StyledChartWraper><Chart /></StyledChartWraper>
          <Table />
        </div>
      )} 

      { isDesctop && (
        <div>
          <StyledTitle>Statistics</StyledTitle>
          <Box display="flex" justifyContent="space-between">
            <StyledChartWraper><Chart /></StyledChartWraper>
            <Table />
          </Box>
        </div>
      )}
    </>
  );
};

export default DiagramTab;
