import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

// project import
import AppBarStyled from './AppBarStyled';
import HeaderContent from './HeaderContent';

import { handlerDrawerOpen, useGetMenuMaster } from 'api/menu';

// assets
import MenuFoldOutlined from '@ant-design/icons/MenuFoldOutlined';
import MenuUnfoldOutlined from '@ant-design/icons/MenuUnfoldOutlined';

// ==============================|| MAIN LAYOUT - HEADER ||============================== //

export default function Header() {
  const theme = useTheme();
  // 画面がLGサイズより小さいかどうか
  const downLG = useMediaQuery(theme.breakpoints.down('lg'));
  const downSM = useMediaQuery(theme.breakpoints.down('sm'));

  const { menuMaster } = useGetMenuMaster();
  
  const drawerOpen = menuMaster.isDashboardDrawerOpened;

  const headerContent = useMemo(() => <HeaderContent />, []);

  const location = useLocation();

  const iconBackColor = 'grey.100';
  const iconBackColorOpen = 'grey.200';

  const isTrainningActive = location.pathname === '/training'; // 現在のURLが'/free/training'と一致するかチェック

  // common header
  const mainHeader = (
    <Toolbar
      sx={{
        justifyContent: {
          xs: 'space-around', // 600px以下のときは 'space-around' を適用
          sm: 'unset' // 600px以上ではデフォルトのスタイルを適用
        }
      }}
    >
      <IconButton
        disableRipple
        aria-label="open drawer"
        onClick={() => handlerDrawerOpen(!drawerOpen)}
        edge="start"
        color="secondary"
        variant="light"
        sx={{
          display: { xs: 'none', sm: 'block' },
          color: 'text.primary',
          bgcolor: drawerOpen ? iconBackColorOpen : iconBackColor,
          ml: { xs: 0, lg: -2 }
        }}
      >
        {!drawerOpen ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </IconButton>
      <IconButton
        disableRipple
        aria-label="open drawer"
        edge="start"
        color="secondary"
        variant="light"
        sx={{
          display: { xs: 'block', sm: 'none', lg: 'none', xl: 'none' },
          color: 'text.primary',
          bgcolor: isTrainningActive ? '#FFF500' : drawerOpen ? iconBackColorOpen : iconBackColor,
          ml: { xs: 0, lg: -2 },
          '&:hover': {
            border: isTrainningActive ? '2px solid #FFF500' : 'none' // ホバー時にボーダーを変更
          },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Link to="/training" style={{ textDecoration: 'none', display: { xs: 'block', sm: 'none', lg: 'none', xl: 'none' } }}>
          💪
        </Link>
        {/* Linkでラップ */}
      </IconButton>
      <IconButton
        disableRipple
        aria-label="open drawer"
        onClick={() => handlerDrawerOpen(!drawerOpen)}
        edge="start"
        color="secondary"
        variant="light"
        sx={{
          display: { xs: 'block', sm: 'none' },
          color: 'text.primary',
          bgcolor: drawerOpen ? iconBackColorOpen : iconBackColor,
          ml: { xs: 0, lg: -2 }
        }}
      >
        🥦
      </IconButton>
      <IconButton
        disableRipple
        aria-label="open drawer"
        onClick={() => handlerDrawerOpen(!drawerOpen)}
        edge="start"
        color="secondary"
        variant="light"
        sx={{
          display: { xs: 'block', sm: 'none' },
          color: 'text.primary',
          bgcolor: drawerOpen ? iconBackColorOpen : iconBackColor,
          ml: { xs: 0, lg: -2 }
        }}
      >
        📖
      </IconButton>
      {headerContent}
    </Toolbar>
  );

  // app-bar params
  const appBar = {
    position: 'fixed',
    color: 'inherit',
    elevation: 0,
    sx: {
      borderBottom: downSM ? 'none' : `1px solid ${theme.palette.divider}`,
      borderTop: downSM ? `1px solid ${theme.palette.divider}` : 'none',
      bottom: downSM ? '0' : 'auto',
      top: downSM ? 'auto' : '0'
    }
  };

  return (
    <>
      {/* 画面サイズが1200px以上の場合はtrueで1200px以下の場合false */}
      {!downLG ? (
        <AppBarStyled open={!!drawerOpen} {...appBar}>
          {mainHeader}
        </AppBarStyled>
      ) : (
        <AppBar {...appBar}>{mainHeader}</AppBar>
      )}
    </>
  );
}
