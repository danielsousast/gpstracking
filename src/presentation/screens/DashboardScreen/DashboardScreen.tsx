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

const INTERVALS = [
  {
    value: '10',
    label: '10s',
  },
  {
    value: '5',
    label: '5s',
  },
  {
    value: '3',
    label: '3s',
  },
  {
    value: '1',
    label: '1s',
  },
];

export function DashboardScreen({navigation}: any) {
  const [selectedInterval, setSelectedInterval] = React.useState('10');
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
        {INTERVALS.map(interval => (
          <IntervalButton
            selected={selectedInterval === interval.value}
            value={interval.label}
            onPress={() => setSelectedInterval(interval.value)}
          />
        ))}
      </S.ButtosWrapper>
    </Screen>
  );
}
