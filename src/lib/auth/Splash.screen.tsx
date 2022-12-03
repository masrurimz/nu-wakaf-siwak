import {
  Box,
  PresenceTransition,
  StatusBar,
  Text,
  useColorModeValue,
  VStack,
} from 'native-base';
import React, { useEffect } from 'react';
import LogoNU from '@src/app/assets/images/LogoNU.svg';
import LogoSiwak from '@src/app/assets/images/LogoSiwak.svg';
import { theme } from '../../app/config';
import { useAuthStore } from './auth.store';
import { useQuery } from '@tanstack/react-query';
import { accountKeys } from '../../app/services/api/account/accountKeys.api.service';
import { accountProfileQuery } from '../../app/services/api/account/accountProfile.api.service';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../app/navigation';

type ScreenProps = NativeStackScreenProps<RootStackParams, 'SplashScreen'>;
type SplashScreenProsp = ScreenProps;

const SplashScreen = (props: SplashScreenProsp) => {
  const { navigation } = props;

  const clearCredential = useAuthStore(state => state.clear);
  const storeToken = useAuthStore(state => state.store);
  const restoreToken = useAuthStore(state => state.restore);
  const profile = useQuery({
    queryKey: accountKeys.getProfile,
    queryFn: accountProfileQuery,
    enabled: false,
  });
  useEffect(() => {
    const validateCredentials = async () => {
      const token = await restoreToken();
      if (!token) {
        return false;
      }

      const res = await profile.refetch();
      const email = res.data?.data.data?.email;
      if (!email) {
        return false;
      }

      storeToken(token);
      return true;
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

        if (!isValid) {
          clearCredential();
          navigation.navigate('WelcomeScreen');
        }
      } catch (error) {
        navigation.navigate('WelcomeScreen');
      }
    })();

    return () => clearTimeout(timerRef);
  }, [clearCredential, navigation, profile, restoreToken, storeToken]);

  return (
    <VStack
      safeArea
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
        backgroundColor={useColorModeValue(
          theme.colors.primary[50],
          theme.colors.primary[900],
        )}
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
