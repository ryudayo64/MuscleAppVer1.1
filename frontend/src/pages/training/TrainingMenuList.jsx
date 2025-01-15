// 筋トレ種目一覧
// 種目一覧データを取得し、リスト形式で表示する。

import { Box, Stack, Typography, Button } from '@mui/material';
import MainCard from 'components/MainCard';
import { useNavigate } from 'react-router';

const TrainingMenuList = () => {
  const navigate = useNavigate(); 
  const rows = [{ part: '胸', menuName: 'ベンチプレス' }, { menuName: 'インクラインベンチプレス' }, { menuName: 'ダンベルプレス' }];

  const trainingDetailRegistrationLink = (e, menuName) => {
    console.log('e.target', e.target);
    console.log('menuName', menuName);
    navigate('/registration-training-detail', { state: { menuName } });
  };
  const trainingHistory = (
    <>
      <Stack
        direction="column"
        spacing={2}
        sx={{
          justifyContent: 'flex-start',
          alignItems: 'center'
        }}
      >
        <Box sx={{ bgcolor: '#161817', borderRadius: '20px', p: 3, mt: 2, mb: 2, width: '100%' }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            {rows[0].part}
          </Typography>
          <Box>
            {rows.map((row) => (
              <div key={row.menuName} style={{ borderTop: '2px solid #1F1F1F' }}>
                <Button className="menu-register" onClick={(e) => trainingDetailRegistrationLink(e, row.menuName)}>
                  {row.menuName}
                </Button>
              </div>
            ))}
          </Box>
        </Box>
      </Stack>
    </>
  );
  return (
    <Box component="div" className="training-menu-list">
      <Stack spacing={1.5}>
        <Typography variant="h4" color="">
          種目一覧
        </Typography>
        <MainCard contentSX={{ p: 2.25 }}>
          <Box sx={{ pt: 1 }}>
            <div>{trainingHistory}</div>
          </Box>
        </MainCard>
      </Stack>
    </Box>
  );
};

export default TrainingMenuList;
