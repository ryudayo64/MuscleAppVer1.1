import PropTypes from 'prop-types';
import MainCard from 'components/MainCard';

import Box from '@mui/material/Box';
import MuscleContinuouDays from './TrainingPage/MuscleContinuouDays';
import RMCounter from './TrainingPage/RMCounter';
import QuoteFetcher from './TrainingPage/QuoteFetcher';
import TrainingHistory from './TrainingPage/TrainingHistory';

export default function AnalyticEcommerce({ title }) {
  return (
    <MainCard contentSX={{ p: 2.25 }}>
      <Box sx={{ pt: 1 }}>
        {title === '履歴' ? <TrainingHistory /> : ''}
        {title === '筋トレ' ? <MuscleContinuouDays /> : ''}
        {title === '偉人の名言' ? <QuoteFetcher /> : ''}
        {title === 'RM計算機' ? <RMCounter /> : ''}
      </Box>
    </MainCard>
  );
}

AnalyticEcommerce.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  count: PropTypes.string,
  percentage: PropTypes.number,
  isLoss: PropTypes.bool,
  extra: PropTypes.string
};
