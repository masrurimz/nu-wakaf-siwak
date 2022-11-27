import { extendTheme } from 'native-base';

import { colors } from './colors';
import components from './components';
import { fontConfig, fonts } from './fonts';

export const theme = extendTheme({
  components,
  colors,
  fontConfig,
  fonts,
});
