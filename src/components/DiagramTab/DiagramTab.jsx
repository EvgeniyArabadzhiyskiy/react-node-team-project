import { useMedia } from 'react-use';
import Chart from '../Chart';
import Table from '../Table';
import {  useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  StyledStatisticWraper,
  StyledChartWraper,
  StyledTitle,
  StyledContentWraper,
} from './DiagramTab.styled';

import { getStatistic } from 'redux/statistic/statisticOperation';

const DiagramTab = () => {
  const dispatch = useDispatch();
  const isMobie = useMedia('(max-width: 767px)');

  useEffect(() => {
    dispatch(getStatistic());
  }, [dispatch]);

  return (
    <div>
      {isMobie ? (
        <StyledStatisticWraper>
          <StyledTitle>Statistics</StyledTitle>

          <StyledChartWraper>
            <Chart />
          </StyledChartWraper>

          <Table />
        </StyledStatisticWraper>
      ) : (
        <StyledStatisticWraper>
          <StyledTitle>Statistics</StyledTitle>
          <StyledContentWraper>
            <StyledChartWraper>
              <Chart />
            </StyledChartWraper>

            <Table />
          </StyledContentWraper>
        </StyledStatisticWraper>
      )}
    </div>
  );
};

export default DiagramTab;
