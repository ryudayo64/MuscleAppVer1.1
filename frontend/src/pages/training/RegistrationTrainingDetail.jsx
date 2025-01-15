import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Box, Stack, Typography, TextField, IconButton, Button } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import MainCard from 'components/MainCard';
import QuoteFetcher from 'components/cards/statistics/TrainingPage/QuoteFetcher';

const RegistrationTrainingDetail = () => {
  const location = useLocation();
  const { menuName } = location.state || {};

  const [timeLeft, setTimeLeft] = useState(10); // タイマーの初期秒数
  const [isRunning, setIsRunning] = useState(false); // タイマーの動作状態
  const rows = [{ part: '胸', menuName: 'ベンチプレス' }, { menuName: 'インクラインベンチプレス' }, { menuName: 'ダンベルプレス' }];

  // タイマーの動作ロジック
  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false); // タイマー終了時に停止
    }
    return () => clearInterval(timer); // クリーンアップ
  }, [isRunning, timeLeft]);

  const handleStart = () => {
    setIsRunning(true); // タイマーをスタート
  };

  const handleCancel = () => {
    setIsRunning(false); // タイマーを停止
    setTimeLeft(60); // 時間をリセット
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      setTimeLeft(value); // 入力値を反映
    }
  };

  useEffect(() => {
    if (menuName) {
      console.log('Received menunmae:', menuName);
    }
  }, [menuName]);

  const timerBox = (
    <Box component="div" className="training-menu-list-detail">
      <Stack spacing={0.5}>
        <MainCard contentSX={{ p: 2.25 }}>
          <Box sx={{ pt: 1 }}>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Box>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <TextField
                    id="standard-basic"
                    variant="standard"
                    value={timeLeft}
                    onChange={handleInputChange}
                    disabled={isRunning} // タイマー実行中は入力不可
                    className="rest-count-number"
                    inputProps={{
                      className: 'rest-count-number'
                    }}
                  />
                  <Typography className="rest-count">秒</Typography>
                </Stack>
              </Box>
              <Box>
                <IconButton className="rest-count-cancel-button" onClick={handleCancel} disabled={!isRunning}>
                  <ClearIcon />
                </IconButton>
              </Box>
              <Box>
                <IconButton className="rest-count-start-button" onClick={handleStart} disabled={isRunning || timeLeft === 0}>
                  <KeyboardArrowRightIcon />
                </IconButton>
              </Box>
            </Stack>
          </Box>
        </MainCard>
      </Stack>
    </Box>
  );

  const quoteFetcherBox = (
    <Box component="div" className="training-menu-list-detail ">
      <Stack spacing={0.5}>
        <MainCard contentSX={{ p: 2.25 }}>
          <Box sx={{ pt: 1 }}>
            <QuoteFetcher />
          </Box>
        </MainCard>
      </Stack>
    </Box>
  );

  const registrationTrainingListBox = (
    <Box component="div" className="training-menu-list">
      <Stack spacing={1.5}>
        <MainCard contentSX={{ p: 2.25 }}>
          <Box sx={{ pt: 1 }}>
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
                  インクラインプレス
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
          </Box>
        </MainCard>
      </Stack>
    </Box>
  );

  return (
    <>
      {timerBox}
      {quoteFetcherBox}
      {registrationTrainingListBox}
    </>
  );
};

export default RegistrationTrainingDetail;
