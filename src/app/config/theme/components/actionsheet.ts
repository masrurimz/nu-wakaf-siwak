import {themeTools} from 'native-base';

export const ActionsheetContent = {
  baseStyle: {
    alignItems: 'stretch',
    px: 5,
    pb: 5,
    _dark: {
      bg: 'dark.50',
    },
  },
  defaultProps: {},
};

export const ActionsheetHeader = {
  baseStyle: (props: any) => ({
    mb: 6,
    _text: {
      fontWeight: 'bold',
      fontSize: 18,
      color: themeTools.mode('gray.800', 'gray.200')(props),
      textAlign: 'right',
      alignSelf: 'flex-start',
    },
  }),
  defaultProps: {},
};
