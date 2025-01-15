import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

const TrainingHistory = () => {
  const rows = [
    { set: 1, weight: 120, reps: 5, rm: 128 },
    { set: 2, weight: 125, reps: 4, rm: 130 },
    { set: 3, weight: 130, reps: 3, rm: 135 }
  ];
  const trainingHistory = (
    <>
      <Box sx={{ bgcolor: '#161817', borderRadius: '20px', p: 3, mt: 2, mb: 2 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          ベンチプレス
        </Typography>
        <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
          <Table sx={{ bgcolor: '#161817' }}>
            <TableHead sx={{ borderBottom: '1.5px solid #1F1F1F' }}>
              <TableRow>
                <TableCell sx={{ padding: '10px', fontSize: '0.6rem' }} align="center">
                  セット
                </TableCell>
                <TableCell sx={{ padding: '10px', fontSize: '0.6rem' }} align="center">
                  重さ（kg）
                </TableCell>
                <TableCell sx={{ padding: '10px', fontSize: '0.6rem' }} align="center">
                  回数
                </TableCell>
                <TableCell sx={{ padding: '10px', fontSize: '0.6rem' }} align="center">
                  RM（kg）
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.set} sx={{ borderBottom: '1.5px solid #1F1F1F' }}>
                  <TableCell align="center">{row.set}</TableCell>
                  <TableCell align="center">{row.weight}kg</TableCell>
                  <TableCell align="center">{row.reps}回</TableCell>
                  <TableCell align="center">{row.rm}kg</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box sx={{ bgcolor: '#161817', borderRadius: '20px', p: 3, mt: 2, mb: 2 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          ベンチプレス
        </Typography>
        <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
          <Table sx={{ bgcolor: '#161817' }}>
            <TableHead sx={{ borderBottom: '1.5px solid #1F1F1F' }}>
              <TableRow>
                <TableCell sx={{ padding: '10px', fontSize: '0.6rem' }} align="center">
                  セット
                </TableCell>
                <TableCell sx={{ padding: '10px', fontSize: '0.6rem' }} align="center">
                  重さ（kg）
                </TableCell>
                <TableCell sx={{ padding: '10px', fontSize: '0.6rem' }} align="center">
                  回数
                </TableCell>
                <TableCell sx={{ padding: '10px', fontSize: '0.6rem' }} align="center">
                  RM（kg）
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.set} sx={{ borderBottom: '1.5px solid #1F1F1F' }}>
                  <TableCell align="center">{row.set}</TableCell>
                  <TableCell align="center">{row.weight}kg</TableCell>
                  <TableCell align="center">{row.reps}回</TableCell>
                  <TableCell align="center">{row.rm}kg</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box sx={{ bgcolor: '#161817', borderRadius: '20px', p: 3, mt: 2, mb: 2 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          ベンチプレス
        </Typography>
        <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
          <Table sx={{ bgcolor: '#161817' }}>
            <TableHead sx={{ borderBottom: '1.5px solid #1F1F1F' }}>
              <TableRow>
                <TableCell sx={{ padding: '10px', fontSize: '0.6rem' }} align="center">
                  セット
                </TableCell>
                <TableCell sx={{ padding: '10px', fontSize: '0.6rem' }} align="center">
                  重さ（kg）
                </TableCell>
                <TableCell sx={{ padding: '10px', fontSize: '0.6rem' }} align="center">
                  回数
                </TableCell>
                <TableCell sx={{ padding: '10px', fontSize: '0.6rem' }} align="center">
                  RM（kg）
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.set} sx={{ borderBottom: '1.5px solid #1F1F1F' }}>
                  <TableCell align="center">{row.set}</TableCell>
                  <TableCell align="center">{row.weight}kg</TableCell>
                  <TableCell align="center">{row.reps}回</TableCell>
                  <TableCell align="center">{row.rm}kg</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box sx={{ bgcolor: '#161817', borderRadius: '20px', p: 3, mt: 2, mb: 2 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          ベンチプレス
        </Typography>
        <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
          <Table sx={{ bgcolor: '#161817' }}>
            <TableHead sx={{ borderBottom: '1.5px solid #1F1F1F' }}>
              <TableRow>
                <TableCell sx={{ padding: '10px', fontSize: '0.6rem' }} align="center">
                  セット
                </TableCell>
                <TableCell sx={{ padding: '10px', fontSize: '0.6rem' }} align="center">
                  重さ（kg）
                </TableCell>
                <TableCell sx={{ padding: '10px', fontSize: '0.6rem' }} align="center">
                  回数
                </TableCell>
                <TableCell sx={{ padding: '10px', fontSize: '0.6rem' }} align="center">
                  RM（kg）
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.set} sx={{ borderBottom: '1.5px solid #1F1F1F' }}>
                  <TableCell align="center">{row.set}</TableCell>
                  <TableCell align="center">{row.weight}kg</TableCell>
                  <TableCell align="center">{row.reps}回</TableCell>
                  <TableCell align="center">{row.rm}kg</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box sx={{ bgcolor: '#161817', borderRadius: '20px', p: 3, mt: 2, mb: 2 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          ベンチプレス
        </Typography>
        <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
          <Table sx={{ bgcolor: '#161817' }}>
            <TableHead sx={{ borderBottom: '1.5px solid #1F1F1F' }}>
              <TableRow>
                <TableCell sx={{ padding: '10px', fontSize: '0.6rem' }} align="center">
                  セット
                </TableCell>
                <TableCell sx={{ padding: '10px', fontSize: '0.6rem' }} align="center">
                  重さ（kg）
                </TableCell>
                <TableCell sx={{ padding: '10px', fontSize: '0.6rem' }} align="center">
                  回数
                </TableCell>
                <TableCell sx={{ padding: '10px', fontSize: '0.6rem' }} align="center">
                  RM（kg）
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.set} sx={{ borderBottom: '1.5px solid #1F1F1F' }}>
                  <TableCell align="center">{row.set}</TableCell>
                  <TableCell align="center">{row.weight}kg</TableCell>
                  <TableCell align="center">{row.reps}回</TableCell>
                  <TableCell align="center">{row.rm}kg</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box sx={{ bgcolor: '#161817', borderRadius: '20px', p: 3, mt: 2, mb: 2 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          ベンチプレス
        </Typography>
        <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
          <Table sx={{ bgcolor: '#161817' }}>
            <TableHead sx={{ borderBottom: '1.5px solid #1F1F1F' }}>
              <TableRow>
                <TableCell sx={{ padding: '10px', fontSize: '0.6rem' }} align="center">
                  セット
                </TableCell>
                <TableCell sx={{ padding: '10px', fontSize: '0.6rem' }} align="center">
                  重さ（kg）
                </TableCell>
                <TableCell sx={{ padding: '10px', fontSize: '0.6rem' }} align="center">
                  回数
                </TableCell>
                <TableCell sx={{ padding: '10px', fontSize: '0.6rem' }} align="center">
                  RM（kg）
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.set} sx={{ borderBottom: '1.5px solid #1F1F1F' }}>
                  <TableCell align="center">{row.set}</TableCell>
                  <TableCell align="center">{row.weight}kg</TableCell>
                  <TableCell align="center">{row.reps}回</TableCell>
                  <TableCell align="center">{row.rm}kg</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );

  const addMenu = (
    <div className="add-menu-button-area">
      <IconButton className="training-add-button">
        <Link to="/training-menu-list" className="training-add-button-link">
          <AddIcon />
        </Link>
      </IconButton>
    </div>
  );

  return (
    <div style={{ position: 'relative' }}>
      {trainingHistory}
      {addMenu}
    </div>
  );
};

export default TrainingHistory;
