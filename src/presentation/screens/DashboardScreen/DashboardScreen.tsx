import React from 'react';
import {Image} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';
import * as S from './DashboardScreen.styles';
import IconImage from '@/common/assets/icon.png';
import {
  ToggleService,
  Text,
  IntervalButton,
  Screen,
} from '@/presentation/components';
import {useLocation} from '@/presentation/providers';
import {NavigationScreenProps, RoutesEnum} from '@/main/navigation';

export function DashboardScreen({
  navigation,
}: NavigationScreenProps<RoutesEnum.DASHBOARD>) {
  const {isConnected} = useNetInfo();
  const {availableIntervals, handleSetNewInterval, selectedInterval} =
    useLocation();

  function onNavigatePress() {
    navigation.navigate(RoutesEnum.PACKAGE_POINT_LIST);
  }

  return (
    <Screen
      onNavigatePress={onNavigatePress}
      withRightButton
      titleAlign="left"
      screenTitle="Olá, bem vindo">
      <S.Wrapper>
        <Image source={IconImage} />
        <S.WrapperContent>
          <Text preset="title">My GPS - Tracking</Text>
          <Text
            preset="body"
            color={isConnected ? 'green' : 'red'}
            fontStyle="italic">
            {isConnected ? 'Online' : 'Offline'}
          </Text>
        </S.WrapperContent>
      </S.Wrapper>
      <ToggleService />
      <Text preset="subtitle" mt={20}>
        Intervalo de comunicação
      </Text>
      <S.ButtosWrapper>
        {availableIntervals?.map(interval => (
          <IntervalButton
            key={interval.value}
            selected={selectedInterval === interval.value}
            value={interval.label}
            onPress={() => handleSetNewInterval(interval.value)}
          />
        ))}
      </S.ButtosWrapper>
    </Screen>
  );
}
