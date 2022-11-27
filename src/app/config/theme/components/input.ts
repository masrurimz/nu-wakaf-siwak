import {themeTools} from 'native-base';

export const Input = {
  baseStyle: (props: any) => ({
    color: themeTools.mode('gray.800', 'gray.200')(props),
  }),
  defaultProps: {
    variant: 'outline',
  },
};
