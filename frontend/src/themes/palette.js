// material-ui
import { createTheme } from '@mui/material/styles';

// third-party
import { presetPalettes } from '@ant-design/colors';

// project import
import ThemeOption from './theme';

// ==============================|| DEFAULT THEME - PALETTE ||============================== //
export default function Palette(mode, presetColor) {
  const colors = presetPalettes;

  let greyPrimary =
    mode === 'dark'
      ? ['#121212', '#1e1e1e', '#2c2c2c', '#383838', '#4a4a4a', '#5c5c5c', '#707070', '#8a8a8a', '#a0a0a0', '#bcbcbc', '#ffffff']
      : ['#ffffff', '#fafafa', '#f5f5f5', '#f0f0f0', '#d9d9d9', '#bfbfbf', '#8c8c8c', '#595959', '#262626', '#141414', '#000000'];

  let greyAscent = mode === 'dark' ? ['#383838', '#4a4a4a', '#707070', '#8a8a8a'] : ['#fafafa', '#bfbfbf', '#434343', '#1f1f1f'];

  let greyConstant = mode === 'dark' ? ['#181818', '#242424'] : ['#fafafb', '#e6ebf1'];

  colors.grey = [...greyPrimary, ...greyAscent, ...greyConstant];

  const paletteColor = ThemeOption(colors, presetColor, mode);

  return createTheme({
    palette: {
      mode,
      common: {
        black: '#000',
        white: '#fff'
      },
      ...paletteColor,
      text: {
        primary: mode === 'dark' ? greyPrimary[10] : paletteColor.grey[700],
        secondary: mode === 'dark' ? greyPrimary[8] : paletteColor.grey[500],
        disabled: mode === 'dark' ? greyPrimary[6] : paletteColor.grey[400]
      },
      action: {
        disabled: mode === 'dark' ? greyPrimary[4] : paletteColor.grey[300]
      },
      divider: mode === 'dark' ? greyPrimary[5] : paletteColor.grey[200],
      background: {
        paper: mode === 'dark' ? greyPrimary[1] : paletteColor.grey[0],
        default: mode === 'dark' ? greyPrimary[0] : paletteColor.grey.A50
      }
    }
  });
}
