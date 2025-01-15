import { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import RefreshIcon from '@mui/icons-material/Refresh';
import Tooltip from '@mui/material/Tooltip';
import { Box } from '@mui/material';

const QuoteFetcher = () => {
  const [quotes, setQuotes] = useState([]);
  const [lastFetchedDate, setLastFetchedDate] = useState(null);

  // 名言を取得する関数
  const fetchQuotes = async (howManyItems) => {
    console.log('howManyItems', howManyItems);
    try {
      const response = await fetch(`http://localhost:5001/api/quotes?howManyItems=${howManyItems}`);
      if (!response.ok) {
        throw new Error(`エラーレスポンス: ${response.status}`);
      }

      const data = await response.json();
      console.log('response', data);
      // レスポンスがOKかをチェック

      setQuotes(data);
    } catch (error) {
      console.error('名言の取得に失敗しました:', error);
    }
  };

  // 日付が変わった時に名言を更新する
  const checkDateAndUpdateQuotes = () => {
    const currentDate = new Date().toLocaleDateString();
    if (currentDate !== lastFetchedDate) {
      fetchQuotes();
      setLastFetchedDate(currentDate);
    }
  };

  // コンポーネントのマウント時に初回データ取得と日付チェック
  useEffect(() => {
    fetchQuotes(); // 初回の名言取得
    setLastFetchedDate(new Date().toLocaleDateString()); // 最初の取得日設定

    // 24時間ごとに日付チェックを行う
    const intervalId = setInterval(checkDateAndUpdateQuotes, 86400000); // 24時間(86400000ms)毎にチェック

    return () => clearInterval(intervalId); // クリーンアップ
  }, [lastFetchedDate]);

  return (
    <Box className="quote_area">
      <Box className="refresh_icon_button_area">
        <Tooltip title="更新する" arrow className="refresh_icon_button_label">
          <IconButton color="primary" onClick={() => fetchQuotes(1)} aria-label="fetch-quotes">
            <RefreshIcon />
          </IconButton>
        </Tooltip>
      </Box>
      {quotes.map((quote, index) => (
        <Box key={index} className="quote_fetcher">
          <Typography variant="h5" className="quote_fetcher_typo">
            {quote.auther}
          </Typography>
          <Typography varint="h6">"{quote.meigen}"</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default QuoteFetcher;
