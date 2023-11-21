import React from 'react';
import * as S from './DashboardScreen.styles';
import IconImage from '@/common/assets/icon.png';
import {Image} from 'react-native';
import {
  ToggleService,
  Text,
  IntervalButton,
  Screen,
} from '@/presentation/components';
import {useLocation} from '@/presentation/providers';

export function DashboardScreen({navigation}: any) {
  const {availableIntervals, handleSetNewInterval, selectedInterval} =
    useLocation();

  function onNavigatePress() {
    navigation.navigate('SyncList');
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
          <Text preset="body" color="green" fontStyle="italic">
            Online
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
