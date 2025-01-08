import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const RMCounter = () => {
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');
  const [rm, setRM] = useState(null);

  // 1RM計算ロジック (Epley式)
  const calculateRM = () => {
    if (weight && reps) {
      const result = Math.round(weight * (1 + reps / 30)); // Epley法による計算
      setRM(result);
    } else {
      setRM(null);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* 入力フィールド */}
      <div style={{ marginBottom: '10px' }}>
        <TextField
          id="filled-basic"
          label="重量 (kg)"
          variant="outlined"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="重量を入力"
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <TextField
          id="filled-basic"
          label="回数 (reps)"
          variant="outlined"
          type="number"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          placeholder="回数を入力"
        />
      </div>

      {/* ボタン */}
      <Button variant="contained" onClick={calculateRM}>
        計算する
      </Button>

      {/* 結果表示 */}
      {rm !== null && (
        <div style={{ marginTop: '20px' }}>
          <h3>推定1RM: {rm} kg</h3>
        </div>
      )}
    </div>
  );
};

export default RMCounter;
