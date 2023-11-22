/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import * as S from './ScreenHeader.styles';
import {useAppSafeArea} from '@/presentation/hooks/useSafeArea';

export interface ScreenHeaderProps {
  screenTitle: string;
  onNavigatePress?: () => void;
  withBackButton?: boolean;
  withRightButton?: boolean;
  titleAlign?: 'center' | 'left' | 'right';
}

export function ScreenHeader({
  screenTitle,
  onNavigatePress,
  withBackButton = false,
  withRightButton = false,
  titleAlign = 'center',
}: ScreenHeaderProps) {
  const {top} = useAppSafeArea();
  return (
    <S.HeaderContainer
      style={{
        paddingTop: top,
      }}>
      {withBackButton && (
        <S.TouchBox
          onPress={onNavigatePress}
          style={{
            position: 'absolute',
            bottom: 20,
            left: 20,
            zIndex: 9,
          }}>
          <S.HeaderText>Voltar</S.HeaderText>
        </S.TouchBox>
      )}
      <S.HeaderText
        style={{
          opacity: 0.7,
          flex: 1,
          textAlign: titleAlign,
        }}>
        {screenTitle}
      </S.HeaderText>
      {withRightButton && (
        <S.TouchBox onPress={onNavigatePress}>
          <S.HeaderText>Status</S.HeaderText>
        </S.TouchBox>
      )}
    </S.HeaderContainer>
  );
}
