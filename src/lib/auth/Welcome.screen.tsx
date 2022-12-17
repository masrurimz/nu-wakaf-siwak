import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  Box,
  Button,
  Heading,
  HStack,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  Text,
  useColorModeValue,
  VStack,
} from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import WelcomeIllustration from 'src/app/assets/illustrations/WelcomeIllustration.svg';
import LogoNU from 'src/app/assets/images/LogoNU.svg';
import LogoSiwak from 'src/app/assets/images/LogoSiwak.svg';
import { theme } from '../../app/config';
import { RootStackParams } from '../../app/navigation';

type ScreenProps = NativeStackScreenProps<RootStackParams, 'SplashScreen'>;
type WelcomeScreenProps = ScreenProps;

const WelcomeScreen = (props: WelcomeScreenProps) => {
  const { navigation } = props;

  return (
    <Box
      flex={1}
      _light={{
        bg: 'white',
      }}
      _dark={{
        bg: 'dark.50',
      }}>
      <StatusBar
        backgroundColor={useColorModeValue('white', theme.colors.dark[50])}
        barStyle={useColorModeValue('dark-content', 'light-content')}
      />
      <ScrollView
        contentContainerStyle={styles.container}
        h={{
          base: '100%',
        }}
        flex={1}>
        <KeyboardAvoidingView h={{ base: '100%' }}>
          <VStack p={5} space={6}>
            <VStack space={3}>
              <HStack
                alignSelf={'flex-start'}
                space={'4'}
                alignItems={'center'}
                borderRadius={'full'}
                px={'3'}
                py={'2'}
                _light={{
                  bg: 'primary.50',
                }}
                _dark={{
                  bg: 'primary.900',
                }}>
                <LogoNU />
                <LogoSiwak />
              </HStack>
              <Heading size={'2xl'}>Sistem Informasi Wakaf NU</Heading>
            </VStack>
          </VStack>
          <VStack
            alignItems={'center'}
            space={'5'}
            flex={1}
            justifyContent={'center'}>
            <WelcomeIllustration />
            <VStack>
              <Heading
                size={'lg'}
                textAlign={'center'}
                color={useColorModeValue('text.800', 'text.100')}>
                Halo, Selamat Datang !
              </Heading>
              <Text
                color={useColorModeValue('text.600', 'text.400')}
                textAlign={'center'}>
                Masuk untuk mulai mengelola data wakaf NU
              </Text>
            </VStack>
          </VStack>
          <VStack p={5} space={'4'}>
            <VStack space={'2'}>
              <Button onPress={() => navigation.navigate('LoginScreen')}>
                Masuk
              </Button>
              <Button
                variant={'outline'}
                onPress={() => navigation.navigate('RegisterScreen')}>
                Daftar
              </Button>
            </VStack>
            <Text fontSize={'xs'} textAlign={'center'}>
              Dengan masuk ataupun mendaftar, berarti kamu telah setuju dengan
              <Text color={'primary.400'}> Syarat dan Ketentuan </Text>serta
              <Text color={'primary.400'}> Kebijakan Privasi </Text>
            </Text>
          </VStack>
        </KeyboardAvoidingView>
      </ScrollView>
    </Box>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    width: '100%',
  },
});
