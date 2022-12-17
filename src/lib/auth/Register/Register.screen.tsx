import { yupResolver } from '@hookform/resolvers/yup';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import {
  Button,
  Flex,
  FormControl,
  Heading,
  HStack,
  Icon,
  IconButton,
  Input,
  ScrollView,
  Stack,
  Text,
  useToast,
} from 'native-base';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { sha1 } from 'react-native-sha1';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as yup from 'yup';
import { RootStackParams } from '../../../app/navigation';
import { authKeys, authRegisterMutation } from '../../../app/services';
import { ToastAlert } from '../../../common/components';
import { ApiResponse } from '../../../common/types/apiResponse';

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

type ScreenProps = NativeStackScreenProps<RootStackParams, 'RegisterScreen'>;
type RegisterScreenProps = ScreenProps;

const RegisterScreen = (props: RegisterScreenProps) => {
  const { navigation } = props;
  const toast = useToast();

  const { control, handleSubmit } = useForm<RegisterUser>({
    resolver: yupResolver(registerUserSchema),
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordConfirmationVisible, setIsPasswordConfirmationVisible] =
    useState(false);

  const register = useMutation({
    mutationKey: authKeys.authRegister,
    mutationFn: authRegisterMutation,
    onSuccess(data, variables) {
      toast.show({
        render: () => (
          <ToastAlert
            title="Pendaftaran Sukses"
            description={`Silahkan cek email ${variables.email} anda untuk mengkonfirmasi pendaftaran`}
            status="success"
            colorScheme="success"
          />
        ),
      });
    },
    onError(error: AxiosResponse<ApiResponse<null>>) {
      toast.show({
        render: () => (
          <ToastAlert
            title="Gagal Mendaftar"
            description={error.data.msg}
            status="error"
            colorScheme="error"
          />
        ),
      });
    },
  });

  const onSubmit = handleSubmit(async data => {
    const pass = await sha1(data.pass);
    const repass = await sha1(data.repass);

    register.mutate({
      ...data,
      pass,
      repass,
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
                    autoCapitalize="none"
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
                    secureTextEntry={!isPasswordVisible}
                    placeholder="Minimal 6 Karakter"
                    value={value}
                    onChangeText={onChange}
                    InputRightElement={
                      <IconButton
                        p={1}
                        mr={1}
                        icon={
                          <Icon
                            as={MaterialCommunityIcons}
                            name={isPasswordVisible ? 'eye' : 'eye-off'}
                          />
                        }
                        onPress={() => setIsPasswordVisible(v => !v)}
                      />
                    }
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
                    secureTextEntry={!isPasswordConfirmationVisible}
                    placeholder="Masukkan kembali kata sandi"
                    value={value}
                    onChangeText={onChange}
                    InputRightElement={
                      <IconButton
                        p={1}
                        mr={1}
                        icon={
                          <Icon
                            as={MaterialCommunityIcons}
                            name={
                              isPasswordConfirmationVisible ? 'eye' : 'eye-off'
                            }
                          />
                        }
                        onPress={() =>
                          setIsPasswordConfirmationVisible(v => !v)
                        }
                      />
                    }
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
          <Button onPress={onSubmit} isLoading={register.isLoading}>
            Daftar
          </Button>
          <HStack alignItems={'center'} alignSelf="center">
            <Text>Sudah punya akun ?</Text>
            <Button
              variant={'link'}
              onPress={() => navigation.navigate('LoginScreen')}>
              Masuk disini
            </Button>
          </HStack>
        </Flex>
      </Flex>
    </ScrollView>
  );
};

export default RegisterScreen;
