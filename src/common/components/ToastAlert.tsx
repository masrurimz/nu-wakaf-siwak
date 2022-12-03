import {
  Alert,
  Box,
  CloseIcon,
  HStack,
  IconButton,
  Text,
  VStack,
} from 'native-base';
import { IAlertProps } from 'native-base/lib/typescript/components/composites/Alert/types';
import React from 'react';

interface ToastAlertProps extends Partial<IAlertProps> {
  title: string;
  description?: string;
}

export const ToastAlert = (props: ToastAlertProps) => {
  const { title, description } = props;

  return (
    <Alert
      w="100%"
      status="info"
      colorScheme="info"
      variant="top-accent"
      {...props}>
      <VStack space={1} w="100%">
        <HStack space={2} alignItems="center" justifyContent="space-between">
          <HStack space={2} alignItems="center">
            <Alert.Icon />
            <Text fontSize="md" fontWeight="medium" color="coolGray.800">
              {title}
            </Text>
          </HStack>
          <IconButton
            variant="unstyled"
            _focus={{
              borderWidth: 0,
            }}
            icon={<CloseIcon size="3" />}
            _icon={{
              color: 'coolGray.600',
            }}
          />
        </HStack>
        {description ? (
          <Box
            pl="6"
            _text={{
              color: 'coolGray.600',
            }}>
            {description}
          </Box>
        ) : null}
      </VStack>
    </Alert>
  );
};
