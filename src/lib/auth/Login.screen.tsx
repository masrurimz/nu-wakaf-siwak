import { yupResolver } from '@hookform/resolvers/yup';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import {
  Alert,
  Box,
  Button,
  CloseIcon,
  Flex,
  FormControl,
  Heading,
  HStack,
  IconButton,
  Input,
  ScrollView,
  Stack,
  Text,
  useToast,
  VStack,
} from 'native-base';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { sha1 } from 'react-native-sha1';
import * as yup from 'yup';
import { RootStackParams } from '../../app/navigation';
import { authKeys, authLoginMutation } from '../../app/services';
import { ApiResponse } from '../../common/types/apiResponse';
import { useAuthStore } from './auth.store';

const loginUserSchema = yup.object({
  email: yup.string().required().email().label('Email'),
  pass: yup.string().required().min(6).label('Password'),
});

type LoginUser = yup.InferType<typeof loginUserSchema>;

type ScreenProps = NativeStackScreenProps<RootStackParams, 'LoginScreen'>;
type LoginScreenProps = ScreenProps;

const LoginScreen = (_props: LoginScreenProps) => {
  const toast = useToast();

  const { control, handleSubmit } = useForm<LoginUser>({
    resolver: yupResolver(loginUserSchema),
  });

  const storeCredential = useAuthStore(state => state.store);
  const isAuthLoading = useAuthStore(state => state.isLoading);
  const login = useMutation({
    mutationKey: authKeys.authLogin,
    mutationFn: authLoginMutation,
    onSuccess(data, variables) {
      const token = data.data.data?.token ?? '';
      const { email, password } = variables;
      storeCredential(email, password, token);
    },
    onError(error: AxiosResponse<ApiResponse<any>>) {
      toast.show({
        render: () => (
          <Alert
            maxW="400"
            status="error"
            colorScheme="error"
            variant="top-accent">
            <VStack space={2} flexShrink={1} w="100%">
              <HStack
                flexShrink={1}
                space={2}
                alignItems="center"
                justifyContent="space-between">
                <HStack flexShrink={1} space={2} alignItems="center">
                  <Alert.Icon />
                  <Text fontSize="md" fontWeight="medium" color="coolGray.800">
                    Gagal Masuk
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
              <Box
                pl="6"
                _text={{
                  color: 'coolGray.600',
                }}>
                {error.data.msg}
              </Box>
            </VStack>
          </Alert>
        ),
      });
    },
  });
  const onSubmit = handleSubmit(async data => {
    const passwordHashed = await sha1(data.pass);
    login.mutate({
      email: data.email,
      password: passwordHashed,
    });
  });

  return (
    <ScrollView
      flex={1}
      _light={{
        bg: 'white',
      }}
      _dark={{
        bg: 'dark.50',
      }}>
      <Flex flex={1}>
        <Stack p={5} space={6}>
          <Stack space={2}>
            <Heading>Masuk</Heading>
            <Text>
              Masukkan email dan kata sandi untuk mulai melengkapi data aset
              wakaf
            </Text>
          </Stack>
          <Stack space={2}>
            <Controller
              control={control}
              name="email"
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <FormControl isInvalid={Boolean(error)}>
                  <FormControl.Label>Email</FormControl.Label>
                  <Input
                    autoCapitalize="none"
                    placeholder="Ex: Zahid@gmail.com"
                    keyboardType="email-address"
                    autoComplete="email"
                    value={value}
                    onChangeText={onChange}
                  />
                  <FormControl.ErrorMessage>
                    {error?.message}
                  </FormControl.ErrorMessage>
                </FormControl>
              )}
            />

            <Controller
              control={control}
              name="pass"
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <FormControl isInvalid={Boolean(error)}>
                  <FormControl.Label>Kata Sandi</FormControl.Label>
                  <Input
                    placeholder="Minimal 6 Karakter"
                    value={value}
                    onChangeText={onChange}
                  />
                  <FormControl.ErrorMessage>
                    {error?.message}
                  </FormControl.ErrorMessage>
                </FormControl>
              )}
            />
          </Stack>
        </Stack>
        <Flex flex={1} p={5} justifyContent="flex-end">
          <Button
            onPress={onSubmit}
            isLoading={login.isLoading || isAuthLoading}>
            Masuk
          </Button>
          <HStack alignItems={'center'} alignSelf="center">
            <Text>Belum punya akun ?</Text>
            <Button variant={'link'}>Daftar disini</Button>
          </HStack>
        </Flex>
      </Flex>
    </ScrollView>
  );
};

export default LoginScreen;
