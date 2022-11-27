import {themeTools} from 'native-base';

export const Heading = {
  baseStyle: (props: any) => ({
    color: themeTools.mode('gray.800', 'gray.200')(props),
    lineHeight: 'md',
  }),
};
