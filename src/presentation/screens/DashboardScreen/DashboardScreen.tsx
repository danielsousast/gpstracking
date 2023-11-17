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

export function DashboardScreen() {
  return (
    <Screen>
      <S.Wrapper>
        <Image source={IconImage} />
        <S.WrapperContent>
          <Text preset="title">My GPS - Tracking</Text>
          <Text preset="body">Online</Text>
        </S.WrapperContent>
      </S.Wrapper>
      <ToggleService />
      <Text preset="subtitle" mt={20}>
        Intervalo de comunicação
      </Text>
      <S.ButtosWrapper>
        <IntervalButton value="12s" onPress={() => []} />
        <IntervalButton value="12s" onPress={() => []} />
        <IntervalButton value="12s" onPress={() => []} />
        <IntervalButton value="12s" onPress={() => []} />
      </S.ButtosWrapper>
    </Screen>
  );
}
