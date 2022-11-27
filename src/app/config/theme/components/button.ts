export const Button = {
  baseStyle: {
    borderRadius: '20',
  },
  defaultProps: {
    p: 3,
  },
  variants: {
    link: variantLink,
  },
};

function variantLink() {
  return {
    _text: {
      fontWeight: 'bold',
    },
  };
}
