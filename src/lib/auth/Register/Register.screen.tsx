import { yupResolver } from '@hookform/resolvers/yup';
// import { NativeStackScreenProps } from '@react-navigation/native-stack';
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
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { sha1 } from 'react-native-sha1';
import * as yup from 'yup';

let registerUserSchema = yup.object({
  nama: yup.string().required().label('Nama'),
  email: yup.string().required().email().label('Email'),
  pass: yup.string().required().min(6).label('Password'),
  repass: yup
    .string()
    .required()
    .min(6)
    .oneOf([yup.ref('pass')], 'Passwords must match')
    .label('Ulangi Password'),
});

type RegisterUser = yup.InferType<typeof registerUserSchema>;

// type ScreenProps = NativeStackScreenProps<RootStackParamList, 'RegisterScreen'>;
interface RegisterScreenPros {}

const RegisterScreen = ({}: RegisterScreenPros) => {
  const toast = useToast();

  // const [register, { isLoading }] = useRegisterMutation();

  const { control, handleSubmit } = useForm<RegisterUser>({
    resolver: yupResolver(registerUserSchema),
  });

  const onSubmit = handleSubmit(async data => {
    try {
      const pass = await sha1(data.pass);
      const repass = await sha1(data.repass);

      // const resultRegister = await register({
      //   ...data,
      //   pass,
      //   repass,
      // }).unwrap();

      // if (resultRegister.id !== '00') {
      //   toast.show({
      //     title: resultRegister.msg,
      //     bg: 'danger.600',
      //     w: 350,
      //   });

      //   return;
      // }

      // toast.show({
      //   title: 'Berhasil mendaftar',
      //   description: `Silahkan cek email ${resultRegister.data.email} anda untuk mengkonfirmasi pendaftaran`,
      //   bg: 'success.600',
      //   w: 350,
      //   duration: 10000,
      // });

      // navigation.navigate('LoginScreen');
    } catch (error) {}
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
            <Heading>Daftar</Heading>
            <Text>Lengkapi form data diri berikut untuk membuat akun baru</Text>
          </Stack>
          <Stack space={2}>
            <Controller
              control={control}
              name="nama"
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <FormControl isInvalid={Boolean(error)}>
                  <FormControl.Label>Nama</FormControl.Label>
                  <Input
                    placeholder="Ex: Muhammad Zahid Masruri"
                    autoComplete="name"
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
              name="email"
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <FormControl isInvalid={Boolean(error)}>
                  <FormControl.Label>Email</FormControl.Label>
                  <Input
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

            <Controller
              control={control}
              name="repass"
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <FormControl isInvalid={Boolean(error)}>
                  <FormControl.Label>Ulangi Kata Sandi</FormControl.Label>
                  <Input
                    placeholder="Masukkan kembali kata sandi"
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
            Daftar
          </Button>
          <HStack alignItems={'center'} alignSelf="center">
            <Text>Sudah punya akun ?</Text>
            <Button variant={'link'} onPress={() => {}}>
              Masuk disini
            </Button>
          </HStack>
        </Flex>
      </Flex>
    </ScrollView>
  );
};

export default RegisterScreen;
