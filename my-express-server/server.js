const express = require('express');
const axios = require('axios');
const cors = require('cors');

// サーバー設定
const app = express();
app.use(cors()); // CORSの設定

// APIエンドポイント定義
app.get('/api/quotes', async (req, res) => {
  try {
    const response = await axios.get('https://meigen.doodlenote.net/api/json.php?c=3');
    res.json(response.data); // データをそのまま返す
  } catch (error) {
    console.error('APIエラー:', error.message);
    res.status(500).json({ error: 'サーバーエラーが発生しました' });
  }
});

// ポート設定
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`サーバーが http://localhost:${PORT} で起動しました`);
});
