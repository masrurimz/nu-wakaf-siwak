import React from 'react';
import {
  Button,
  Flex,
  FormControl,
  Heading,
  HStack,
  Input,
  ScrollView,
  Stack,
  Text,
  useToast,
} from 'native-base';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { sha1 } from 'react-native-sha1';
import { Controller, useForm } from 'react-hook-form';

const loginUserSchema = yup.object({
  email: yup.string().required().email().label('Email'),
  pass: yup.string().required().min(6).label('Password'),
});

type LoginUser = yup.InferType<typeof loginUserSchema>;

// type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

const LoginScreen = () => {
  const toast = useToast();

  const { control, handleSubmit } = useForm<LoginUser>({
    resolver: yupResolver(loginUserSchema),
  });

  const onSubmit = handleSubmit(async data => {
    try {
      const passwordHashed = await sha1(data.pass);

      // const resultLogin = await login({
      //   user: data.email,
      //   pass: passwordHashed,
      // }).unwrap();

      // if (resultLogin.id !== '00') {
      //   toast.show({
      //     title: resultLogin.msg,
      //     bg: 'danger.600',
      //     w: 350,
      //   });

      //   return;
      // }

      // dispatch(
      //   storeCredential({
      //     token: resultLogin.data.token,
      //     email: data.email,
      //     passwordHashed,
      //   }),
      // );
    } catch (error) {
      console.error(error);
    }
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
          <Button onPress={onSubmit} isLoading={false}>
            Masuk
          </Button>
          <HStack alignItems={'center'} alignSelf="center">
            <Text>Belum punya akun ?</Text>
            <Button
              variant={'link'}
              onPress={() => navigation.navigate('RegisterScreen')}>
              Daftar disini
            </Button>
          </HStack>
        </Flex>
      </Flex>
    </ScrollView>
  );
};

export default LoginScreen;
