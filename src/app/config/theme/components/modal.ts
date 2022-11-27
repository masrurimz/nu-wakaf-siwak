export const ModalContent = {
  baseStyle: () => {
    return {
      backgroundColor: 'white',
    };
  },
};

export const ModalCloseButton = {
  baseStyle: () => {
    return {
      position: 'relative',
      top: 0,
      left: 0,
      alignSelf: 'flex-start',
      px: 5,
      pt: 5,
      _icon: {
        size: 4,
      },
    };
  },
};

export const ModalHeader = {
  baseStyle: {
    borderBottomWidth: 0,
    _text: {
      fontWeight: 'bold',
      color: 'gray.800',
      fontSize: 'xl',
    },
    px: 5,
    mb: 0,
    pb: 0,
    pr: 0,
  },
};

export const ModalBody = {
  baseStyle: () => {
    return {
      p: 5,
    };
  },
};

export const Modal = {
  defaultProps: {
    size: 'xl',
  },
};
