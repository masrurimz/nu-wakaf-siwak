// import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  Box,
  PresenceTransition,
  StatusBar,
  Text,
  useColorModeValue,
  VStack,
} from 'native-base';
import React, { useCallback, useEffect } from 'react';

import LogoNU from '@src/app/assets/images/LogoNU.svg';
import LogoSiwak from '@src/app/assets/images/LogoSiwak.svg';
// import { theme } from '../../app/config';
// import { useAppDispatch } from '../../common/hooks';
// import { RootStackParamList } from '../../app/navigation';
// import { useLoginMutation } from '../../app/services';
// import { restoreCredential, storeCredential } from './authSlice';

// type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SplashScreen'>;

const SplashScreen = () => {
  useEffect(() => {
    const validateCredentials = async () => {
      // try {
      //   const { email, passwordHashed } = await dispatch(
      //     restoreCredential(),
      //   ).unwrap();
      //   if (!email || !passwordHashed) {
      //     return;
      //   }
      //   const resultLogin = await login({
      //     pass: passwordHashed,
      //     user: email,
      //   }).unwrap();
      //   dispatch(
      //     storeCredential({
      //       token: resultLogin.data.token,
      //       email,
      //       passwordHashed,
      //     }),
      //   );
      //   return true;
      // } catch (error) {
      //   console.error(error);
      //   throw error;
      // }
    };

    let timerRef: NodeJS.Timeout;

    (async () => {
      try {
        const animateSplashScreen = () =>
          new Promise<void>(resolve => {
            timerRef = setTimeout(() => {
              resolve();
            }, 1500);
          });

        const [isValid] = await Promise.all([
          validateCredentials(),
          animateSplashScreen(),
        ]);

        // if (!isValid) {
        //   navigation.navigate('WelcomeScreen');
        // }
      } catch (error) {
        // navigation.navigate('WelcomeScreen');
      }
    })();

    return () => clearTimeout(timerRef);
  }, []);

  return (
    <VStack
      flex={1}
      p={'5'}
      alignItems={'center'}
      _light={{
        bg: 'primary.50',
      }}
      _dark={{
        bg: 'primary.900',
      }}>
      <StatusBar
        // backgroundColor={useColorModeValue(
        //   theme.colors.primary[50],
        //   theme.colors.primary[900],
        // )}
        barStyle={useColorModeValue('dark-content', 'light-content')}
      />
      <PresenceTransition
        visible={true}
        initial={{
          opacity: 0.4,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 1000,
          },
        }}>
        <VStack alignItems={'center'}>
          <Box position={'absolute'} pt={'5'}>
            <LogoNU width={90} height={60} />
          </Box>
          <VStack flex={1} justifyContent={'center'} alignItems={'center'}>
            <LogoSiwak width={243} height={83} />
            <Text
              fontSize={'xl'}
              color={useColorModeValue('text.600', 'text.400')}
              textAlign={'center'}>
              Sistem Informasi Wakaf NU
            </Text>
          </VStack>
        </VStack>
      </PresenceTransition>
    </VStack>
  );
};

export default SplashScreen;
