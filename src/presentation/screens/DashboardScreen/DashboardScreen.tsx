import React from 'react';
import * as S from './DashboardScreen.styles';
import IconImage from '@/common/assets/icon.png';

import Screen from '@/presentation/components/Screen/Screen';
import {Image} from 'react-native';
import {ToggleService} from '@/presentation/components/ToggleService/Toggle';

export function DashboardScreen() {
  return (
    <Screen>
      <S.Wrapper>
        <Image source={IconImage} />
        <S.WrapperContent>
          <S.ScreenTitle>My GPS - Tracking</S.ScreenTitle>
          <S.StatusText>Online</S.StatusText>
        </S.WrapperContent>
      </S.Wrapper>
      <ToggleService />
    </Screen>
  );
}
