import { useEffect, useState } from 'react';
import axios from 'axios';
import { experimentalStyled as styled } from '@mui/material/styles';
import { Box, Grid, Paper, Modal, Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.primary,
  cursor: 'pointer',
  transition: '0.5s',
  '&:hover': {
    backgroundColor: '#08af9c', // 背景色が薄いグリーンに
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' // ホバー時のシャドウ
  },
  '&:focus': {
    outline: 'none' // フォーカス時にアウトラインを消す
  }
}));

// Modal styling
const ModalContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: theme.spacing(2)
}));

const ModalLeft = styled(Box)(({ theme }) => ({
  flex: 1,
  paddingRight: theme.spacing(2)
}));

const ModalRight = styled(Box)(({ theme }) => ({
  flex: 1,
  textAlign: 'center'
}));

export default function OrderTable() {
  const [muscleData, setMuscleData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // データをAPIから取得
  useEffect(() => {
    axios
      .get('http://localhost:8000/get_s_muscle') // APIのエンドポイントを指定
      .then((response) => {
        setMuscleData(response.data); // 取得したデータをstateに保存
      })
      .catch((error) => {
        console.error('データ取得エラー:', error);
      });
  }, []); // 初回レンダリング時に実行

  // モーダルを開く
  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setOpenModal(true);
  };

  // モーダルを閉じる
  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedItem(null);
  };

  return (
    <Box sx={{ m: 5, flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {/* 取得したデータをGridにマッピングして表示 */}
        {muscleData.map((item, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item onClick={() => handleOpenModal(item)}>{item.name}</Item>
          </Grid>
        ))}
      </Grid>

      {/* モーダル */}
      <Modal open={openModal} onClose={handleCloseModal} aria-labelledby="modal-title" aria-describedby="modal-description">
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            p: 4
          }}
        >
          {selectedItem && (
            <ModalContent>
              <ModalLeft>
                <Typography variant="h6">
                <strong>筋肉名:</strong> {selectedItem.name}
                </Typography>
                <Typography variant="body1">
                  <strong>部位:</strong> {selectedItem.location}
                </Typography>
                <Typography variant="body1">
                  <strong>作用:</strong> {selectedItem.description}
                </Typography>
                <Typography variant="body1">
                  <strong>鍛えるメリット:</strong> {selectedItem.benefits}
                </Typography>
              </ModalLeft>
              <ModalRight>
                <img src={selectedItem.image_url} alt={selectedItem.name} width="200" />
              </ModalRight>
            </ModalContent>
          )}
        </Box>
      </Modal>
    </Box>
  );
}
